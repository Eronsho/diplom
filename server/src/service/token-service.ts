import jwt from "jsonwebtoken";

import { Token } from "../models/token-modal";
import * as dotenv from "dotenv";
import { UserClienInstance, UserClientAttributes } from "../interfaces/user";
import { UserDtoattrib } from "@/dtos/user-dto";
dotenv.config();
class TokenService {
  generateTokens(payload: UserDtoattrib) {
    try {
      const accessToken = jwt.sign(payload, "jwt-secret-key", {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(payload, "jwt-secret-key", {
        expiresIn: "30d",
      });

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.log(error);
    }
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, "jwt-secret-key");
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = <UserClientAttributes>(
        jwt.verify(token, "jwt-secret-key")
      );
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId: string, refreshToken: string) {
    try {
      const tokenData = await Token.findOne({ where: { user: userId } });
      console.log("=====tokenData===============================");
      console.log(tokenData);
      console.log("=========tokenData===========================");
      if (tokenData) {
        tokenData.refresh_token = refreshToken;
        return tokenData.save();
      } else {
        const token = await Token.create({
          user: userId,
          refresh_token: refreshToken,
        });
        return token;
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  }

  async removeToken(refresh_token: string) {
    const tokenData = await Token.destroy({ where: { refresh_token } });
    return tokenData;
  }

  async findToken(refresh_token: string) {
    const tokenData = await Token.findOne({ where: { refresh_token } });
    return tokenData;
  }
}

export const tokenService = new TokenService();
