import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from '../model/gumodule.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = 'http://localhost:8080'; // Adjust the URL according to your API endpoint

  constructor(private http: HttpClient) { }

  getModuleByName(moduleName: string): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/module/get/${moduleName}`);
  }

  updateModule(module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiUrl}/module/update`, module); // Update URL as per backend API
  }
}