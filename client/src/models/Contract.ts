export interface ContractAttributes {
  contract: number;
  data: Date;
  organization_fullname: string;
  phone_number: number;
  director_fullname: string;
  user_fullname: string;
  organization_inn: number;
  organization_ogrn: number;
  baced_doc: string;
  address: string;
}
export enum ContractActionTypes {
  ADD_CONTRACT = "ADD_CONTRACT",
  ADD_CONTRACT_SUCCESSS = "ADD_CONTRACT_SUCCESSS",
  ADD_CONTRACT_ERROR = "ADD_CONTRACT_ERROR",
  FETCH_CONTRACT = "FETCH_CONTRACT",
  FETCH_CONTRACT_SUCCESSS = "FETCH_CONTRACT_SUCCESSS",
  FETCH_CONTRACT_ERROR = "FETCH_CONTRACT_ERROR",
}
interface addContractAction {
  type: ContractActionTypes.ADD_CONTRACT;
  payload: ContractAttributes;
}
interface addContractSuccessAction {
  type: ContractActionTypes.ADD_CONTRACT_SUCCESSS;
  payload: ContractAttributes;
}
interface addContractErrorAction {
  type: ContractActionTypes.ADD_CONTRACT_ERROR;
  payload: string;
}
interface fetchContractAction {
  type: ContractActionTypes.FETCH_CONTRACT;
}
interface fetchContractSuccessAction {
  type: ContractActionTypes.FETCH_CONTRACT_SUCCESSS;
  payload: ContractAttributes;
}
interface fetchContractErrorAction {
  type: ContractActionTypes.FETCH_CONTRACT_ERROR;
  payload: string;
}

export type ContractAction =
  | addContractAction
  | addContractSuccessAction
  | addContractErrorAction
  | fetchContractAction
  | fetchContractSuccessAction
  | fetchContractErrorAction;
