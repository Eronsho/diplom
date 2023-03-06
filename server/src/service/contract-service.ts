import { ContractAttributes } from "@/interfaces/contract";
import { ContractClient } from "../models/contract";
import { Response, Request, NextFunction } from "express";
import { mailService } from "./mail-service";
interface cont {
  value: string;
}
import { v4 as uuidv4 } from "uuid";
import { ApiError } from "../exceptions/api-error";
class ContractService {
  async addContract(contract: ContractAttributes) {
    let contracts = ContractClient.findOne({
      where: { contract: contract.contract },
    });
    if (contracts) {
      throw ApiError.BadRequest(
        `Договор с таким номером ${contract.contract} уже существует`
      );
    }
    try {
      const newId = uuidv4();
      const newContract = contract;
      newContract.id = newId;
      const dse = new Date().toDateString();
      newContract.data = dse;
      console.log({ ...newContract });
      const newAddContract = await ContractClient.create({ ...newContract });
      return newAddContract;
    } catch (error) {
      console.log(error);
    }
  }
  async changeContract(id: string, field: cont, value: string) {
    try {
      const contarct = await ContractClient.findOne({ where: { id } });

      Object.keys(contarct).forEach((e) => {
        if (e == field.value) {
          this[e] = value;
        }
        contarct.save();
        return e;
      });
    } catch (error) {
      console.log(error);
    }
  }
  async removeContract(contractId: string) {
    let contracts = ContractClient.destroy({
      where: { id: contractId },
    });
    if (contracts) {
      throw ApiError.BadRequest(`Договор  удален`);
    }
    return contracts;
  }
}
const contractService = new ContractService();
export { contractService };
