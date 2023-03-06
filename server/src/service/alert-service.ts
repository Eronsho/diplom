import { Alert } from "../models/alert";
import { UserClient } from "../models/User";
import { Response, Request, NextFunction } from "express";

import { v4 as uuidv4 } from "uuid";
import { mailService } from "./mail-service";
class AlertService {
  async addAlert(id_user: string, info: string) {
    const id = uuidv4();
    const alert = await Alert.create({ id, id_user, info });
    const user = await UserClient.findByPk(id_user);
    mailService.sendAlerUser({
      to: user.email,
      link: `${"http://localhost:8000"}`,
      info,
    });
    return alert;
  }
  async getAlert(id: string) {
    const alert = await Alert.findOne({ where: { id } });
    const Update = await Alert.update(
      { status_viewed: true },
      { where: { id } }
    );
    return alert;
  }
  async removeAlert(id: string) {
    const alert = await Alert.destroy({ where: { id } });
    return alert;
  }
}
const alertService = new AlertService();
export { alertService };
