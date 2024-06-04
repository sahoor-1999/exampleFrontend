export interface Module {
  moduleId?: number;
  roleName: string;
  roleId: number; // Add roleId property
  moduleName: string;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  authorization: {
    authId?: number;
    postAuth: boolean;
    getAuth: boolean;
    deleteAuth: boolean;
    putAuth: boolean;
    createdOn: string;
    createdBy: string;
    updatedOn: string;
    updatedBy: string;
  };
}
