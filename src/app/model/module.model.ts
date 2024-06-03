export interface ModuleDTO {
  moduleId?: number;
  moduleName: string;
  createdOn: string;
  updatedOn: string;
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
