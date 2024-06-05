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
  initialModules: Module[] = [];
  isFormChanged: boolean = false;

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
        this.initialModules = JSON.parse(JSON.stringify(modules)); // Clone the modules for comparison
      },
      error => {
        console.error('Error fetching modules', error);
      }
    );
  }

  onFormChange(): void {
    this.isFormChanged = this.checkIfFormChanged();
  }

  checkIfFormChanged(): boolean {
    return JSON.stringify(this.modules) !== JSON.stringify(this.initialModules);
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
    this.initialModules = JSON.parse(JSON.stringify(this.modules)); // Reset the initial state after update
    this.isFormChanged = false; // Reset the form change state
    location.reload();
  }
}
