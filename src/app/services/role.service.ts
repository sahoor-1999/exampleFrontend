// src/app/services/role.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../model/role.model';
import { RoleNew } from '../model/newrole.model'; 
import { ModuleDTO } from '../model/module.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  private apiUrl = 'http://localhost:8080/role';
  private moduleApiUrl = 'http://localhost:8080/module';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiUrl}/get`);
  }

  updateRoles(role: Role[]): Observable<Role[]> {
    return this.http.post<Role[]>(`${this.apiUrl}/addRole`, role);
  }

  addRole(role: RoleNew): Observable<Role> {
    return this.http.post<Role>(`${this.apiUrl}/addNewRole`, role);
  }
  
  addModuleToRole(module: ModuleDTO, roleId: number): Observable<ModuleDTO> {
    return this.http.post<ModuleDTO>(`${this.moduleApiUrl}/new/${roleId}`, module);
  }
}
