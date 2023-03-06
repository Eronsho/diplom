import { UserClientAttributes } from "../interfaces/user";
export interface UserDtoattrib {
  id: string;
  email: string;
  full_name: string;
  contract?: number;
  post?: string;
  role: string;
  isActivated: boolean;
}
export const UserDto = class UserDto {
  id: string;
  email: string;
  full_name: string;
  contract?: number;
  post?: string;
  role: string;
  isActivated: boolean;

  constructor(model: UserDtoattrib) {
    this.email = model.email;
    this.id = model.id;
    this.contract = model.contract;
    this.full_name = model.full_name;
    this.role = model.role;
    this.isActivated = model.isActivated;
    this.post = model.post;
  }
};
