import { Response, Request, NextFunction } from "express";
import { UserClienInstance } from "../interfaces/user";
import { UserClient } from "../models/User";
import { userService } from "../service/user-service";
class UserController {
  // async registration(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { email, password, contract, full_name, role } = req.body;
  //     const userData = await userService.registration({
  //       email,
  //       password,
  //       contract,
  //       full_name,
  //       role,
  //     });

  //     res.cookie("refreshToken", userData.refreshToken, {
  //       maxAge: 30 * 24 * 60 * 60 * 1000,
  //       httpOnly: true,
  //     });
  //     return res.json(userData);
  //   } catch (error) {}
  // }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      // res.cookie("refreshToken", userData.refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60 * 1000,
      //   httpOnly: true,
      // });

      return res.send(userData);
    } catch (e) {
      next(e);
    }
  }
  // async logout(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { refreshToken } = req.cookies;
  //     const token = await userService.logout(refreshToken);
  //     res.clearCookie("refreshToken");
  //     return res.json(token);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  // async refresh(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { refreshToken } = req.cookies;
  //     const userData = await userService.refresh(refreshToken);
  //     res.cookie("refreshToken", userData.refreshToken, {
  //       maxAge: 30 * 24 * 60 * 60 * 1000,
  //       httpOnly: true,
  //     });
  //     return res.json(userData);
  //   } catch (e) {
  //     next(e);
  //   }
  // }
  async getUsers() {
    try {
      const users = await userService.getAllUsers();
      return users;
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  }
}

const userController = new UserController();
export { userController };
