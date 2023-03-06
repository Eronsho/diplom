import { ContractActionTypes, ContractAttributes } from "../../models/Contract";

export const addContractdRequest = (payload: ContractAttributes) => ({
  type: ContractActionTypes.ADD_CONTRACT,
  payload,
});
export const addContractdSuccess = (payload: ContractAttributes) => ({
  type: ContractActionTypes.ADD_CONTRACT_SUCCESSS,
  payload,
});
export const addContractError = (payload: string) => ({
  type: ContractActionTypes.ADD_CONTRACT_SUCCESSS,
  payload,
});

export const fetchContractdRequest = (payload: ContractAttributes) => ({
  type: ContractActionTypes.FETCH_CONTRACT,
  payload,
});
export const fetchContractdSuccess = (payload: ContractAttributes) => ({
  type: ContractActionTypes.FETCH_CONTRACT_SUCCESSS,
  payload,
});
export const fetchContractError = (payload: string) => ({
  type: ContractActionTypes.FETCH_CONTRACT_ERROR,
  payload,
});
