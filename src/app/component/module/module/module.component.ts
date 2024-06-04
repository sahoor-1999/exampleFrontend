import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';
import { Module } from 'src/app/model/gumodule.model';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  modules: Module[] = [];
  moduleName: string = '';

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleName = params['moduleName'];
      this.fetchModules(this.moduleName);
    });
  }

  fetchModules(moduleName: string): void {
    this.moduleService.getModuleByName(moduleName).subscribe(
      (modules: Module[]) => {
        this.modules = modules;
      },
      error => {
        console.error('Error fetching modules', error);
      }
    );
  }

  updateModule(): void {
    this.modules.forEach(module => {
      this.moduleService.updateModule(module).subscribe(
        (updatedModule: Module) => {
          console.log('Module updated successfully', updatedModule);
        },
        error => {
          console.error('Error updating module', error);
        }
      );
    });
  }
}
