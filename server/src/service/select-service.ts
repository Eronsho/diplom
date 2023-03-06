import { Alert } from "../models/alert";
import { UserClient } from "../models/User";
import { Response, Request, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { mailService } from "./mail-service";
import { SelectAll } from "../models/project";

class SelectService {
  async addSelect(value: string) {
    try {
      const id = uuidv4();
      const add = await SelectAll.create({ id, value });
      return add;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllSelect() {
    try {
      const selectAll = await SelectAll.findAll();
      return selectAll;
    } catch (error) {
      console.log(error);
    }
  }
  async getOneSelect(id: string) {
    const oneSelect = await SelectAll.findAll({ where: { id } });
    return oneSelect;
  }
}
const selectService = new SelectService();
export { selectService };
