import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleNew } from 'src/app/model/newrole.model';
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
    authorization: {
      postAccess: false,
      getAccess: false,
      deleteAccess: false,
      putAccess: false
    },
    
  };

  constructor(private roleService: RoleService, private router: Router) { }

  addRole(): void {
    if (!this.roleNew.roleName || /\d/.test(this.roleNew.roleName) || /[!@#$%^&*(),.?":{}|<>]/.test(this.roleNew.roleName)) {
      alert("Role name is required and should not contain numbers or special characters.");
      return;
    }
  
    this.roleNew.updatedOn = new Date().toISOString();

    this.roleService.addRole(this.roleNew)
      .subscribe(() => {
        console.log('Role added successfully!');
        // alert('Record saved successfully');
        this.router.navigate(['/role']); // Adjust the path as necessary
      }, error => {
        console.error('Error adding role:', error);
        // Handle error message or display error to user
      });
    location.reload();
  }
}
