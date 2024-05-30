import { Authorization } from "./authorization.model";

export interface Role {
  roleId: number;
  roleName: string;
  authorization?: Authorization;
}