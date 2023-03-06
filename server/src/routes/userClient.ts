import { userService } from "../service/user-service";
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { nextTick } from "process";
import { alertService } from "../service/alert-service";
export let router = express.Router();
router.get(
  "/user/data",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).send(users);
    } catch (e) {
      next(e);
    }
  }
);
router.post(
  "/api/user/registration",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password, contract, full_name } = req.body;
      const userData = await userService.registration({
        email,
        password,
        contract,
        full_name,
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
  "/api/user/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).send(userData);
    } catch (e) {
      next(e);
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  }
);
router.get(
  "/activate/:link",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect("http://localhost:3000/");
    } catch (e) {
      next(e);
    }
  }
);
router.post(
  "/logout",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies;
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
router.put(
  "/recovery",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      console.log("====================================");
      console.log(email);
      console.log("====================================");
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
router.post(
  "/alert",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id_user, info } = req.body;
      const alert = await alertService.addAlert(id_user, info);
      return res.status(200).send(alert);
    } catch (e) {
      next(e);
    }
  }
);
