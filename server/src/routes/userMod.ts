import { userService } from "../service/user-service";
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { nextTick } from "process";
export let router = express.Router();
// router.get(
//   "/user/data",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const users = await userService.getAllUsers();
//       res.status(200).send(users);
//     } catch (e) {
//       next(e);
//     }
//   }
// );
router.post(
  "/api/user/registration/userMod",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password, post, full_name, role } = req.body;
      const userData = await userService.registrationUserMod({
        email,
        password,
        post,
        full_name,
        role,
      });

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).send(userData);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/api/user/login/userMod",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const userData = await userService.loginUserMod(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.status(200).send(userData);
    } catch (e) {
      next(e);
    }
  }
);
router.get(
  "/userMod/activate/:link",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const activationLink = req.params.link;
      await userService.activateUserMod(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }
);
router.post(
  "/api/user/logout",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.body;
      console.log(req.body);

      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).send(token);
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/refresh",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).send(userData);
    } catch (e) {
      next(e);
    }
  }
);
router.post(
  "/recovery",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      await userService.recoveryLink(email);
      return res
        .status(200)
        .send(`Cсылка для восстановления пароля отправлена на почту ${email} `);
    } catch (e) {
      next(e);
    }
  }
);
router.post(
  "/recovery/:link",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recoveryLink = req.params.link;
      const password = req.body.toString();
      await userService.recovery(recoveryLink, password);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }
);
router.get(
  "/api/user/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getAllUsers();
      return user;
    } catch (e) {
      next(e);
    }
  }
);
