import { UserDto, UserDtoattrib } from "./../dtos/user-dto";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { UserClient, UserMod } from "../models/User";
import { UserClienInstance, UserClientAttributes } from "../interfaces/user";
import { tokenService } from "./token-service";
import { ApiError } from "../exceptions/api-error";
import { mailService } from "./mail-service";
import { ContractClient } from "../models/contract";
import { where } from "sequelize";

class UserService {
  async registration({
    email,
    password,
    contract,
    full_name,
  }: {
    email: string;
    password: string;
    contract: number;
    full_name: string;
  }) {
    try {
      const contracted = await ContractClient.findAll({
        where: { contract: contract },
      });
    } catch (error) {
      console.log(error);

      throw ApiError.BadRequest(`Договор  № ${contract} не найден`);
    }
    const candidate = await UserClient.findOne({ where: { email } });

    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const id = uuidv4(); // v34fa-asfasf-142saf-sa-asf
    const activationLink = uuidv4();
    const user = await UserClient.create({
      id,
      email,
      password: hashPassword,
      contract,
      full_name,
      role: "client",
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `${"http://localhost:8000"}/activate/${activationLink}`
    );

    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async registrationUserMod({
    email,
    password,
    full_name,
    post,
    role,
  }: {
    email: string;
    password: string;
    post: string;
    full_name: string;
    role: string;
  }) {
    const candidate = await UserMod.findOne({ where: { email } });
    if (candidate) {
      console.log("====================================");
      console.log(`Пользователь с почтовым адресом ${email} уже существует`);
      console.log("====================================");
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const id = uuidv4(); // v34fa-asfasf-142saf-sa-asf
    const activationLink = uuidv4();
    const user = await UserMod.create({
      id,
      email,
      password: hashPassword,
      post,
      full_name,
      role,
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `${"http://localhost:8000"}api/activate/${activationLink}`
    );

    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async activateUserMod(activationLink: string) {
    const user = await UserMod.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest("Неккоректная ссылка активации usermod");
    }
    user.isActivated = true;
    await user.save();
    return user;
  }
  async activate(activationLink: string) {
    const user = await UserClient.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest("Неккоректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
    return user;
  }
  async login(email: string, password: string) {
    const user = await UserClient.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
      console.log("Пользователь с таким email не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль");
      console.log("Неверный пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async loginUserMod(email: string, password: string) {
    try {
      const user = await UserMod.findOne({ where: { email: email } });
      if (!user) {
        throw ApiError.BadRequest("Пользователь с таким email не найден");
        console.log("Пользователь с таким email не найден");
      }

      const isPassEquals = await bcrypt.compare(password, user.password);
      if (!isPassEquals) {
        throw ApiError.BadRequest("Неверный пароль");
        console.log("Неверный пароль");
      }
      const userDto = new UserDto(user);

      const tokens = tokenService.generateTokens({ ...userDto });

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (error) {
      console.log(error);
    }
  }
  async recoveryLink(email: string) {
    const user = await UserClient.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    const recoveryLink = uuidv4();
    user.activationLink = recoveryLink;
    await mailService.sendRecoverynMail(
      email,
      `${"http://localhost:3000"}api/recovery/${recoveryLink}`
    );
    await user.save();
  }
  async recovery(activationLink: string, password: string) {
    const user = await UserClient.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    user.password = hashPassword;
    await user.save();
  }
  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserClient.findByPk(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    try {
      const users = await UserClient.findAll();
      return users;
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }
  async getOneUser(idUser) {
    const user = await UserClient.findOne({ where: { id: idUser } });
    return user;
  }
}

export const userService = new UserService();
