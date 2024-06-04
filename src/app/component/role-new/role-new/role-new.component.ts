import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleDTO } from 'src/app/model/module.model';
import { RoleNew } from 'src/app/model/newrole.model';
import { Role } from 'src/app/model/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-new',
  templateUrl: './role-new.component.html',
  styleUrls: ['./role-new.component.css']
})
export class RoleNewComponent {
   [x: string]: any;
  roleNew: RoleNew = {
    roleName: '',
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    createdBy: 1,
    updatedBy: 1,
    modules: [],
    authorization: {
      postAccess: false,
      getAccess: false,
      deleteAccess: false,
      putAccess: false
    },
    
  };

  availableRoles: Role[] = [];

  availableModules = ['Travel', 'Employee Info', 'LMS', 'Leave'];

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
    this.fetchRoles();
  }

  fetchRoles() {
    this.roleService.getRoles().subscribe(
      (roles: Role[]) => {
        this.availableRoles = roles;
      },
      error => {
        console.error('Error fetching roles', error);
      }
    );
  }

  addRole(form: NgForm): void {
    if (!this.roleNew.roleName || /\d/.test(this.roleNew.roleName) || /[!@#$%^&*(),.?":{}|<>]/.test(this.roleNew.roleName)) {
      alert("Role name is required and should not contain numbers or special characters.");
      return;
    }

    this.roleNew.updatedOn = new Date().toISOString();

    const selectedRole = this.availableRoles.find(role => role.roleName === this.roleNew.roleName);

    if (selectedRole) {
      const moduleRequests = this.roleNew.modules.map(moduleName => {
        const moduleDTO: ModuleDTO = {
          moduleName: moduleName,
          createdOn: new Date(),
          createdBy: '1',
          updatedOn: new Date(),
          updatedBy: '1',
          authorization: {
            postAuth: false,
            getAuth: false,
            deleteAuth: false,
            putAuth: false,
            createdOn: new Date().toISOString(),
            createdBy: '1',
            updatedOn: new Date().toISOString(),
            updatedBy: '1'
          }
        };

        return this.roleService.addModuleToRole(moduleDTO, selectedRole.roleId).toPromise();
      });

      Promise.all(moduleRequests)
        .then(() => {
          console.log('Modules added successfully to role', selectedRole.roleName);
          this.router.navigate(['/role']); // Adjust the path as necessary
        })
        .catch(error => {
          console.error('Error adding modules to role:', error);
        });
    } else {
      console.error('Selected role not found');
    }
    location.reload();
  }
}
