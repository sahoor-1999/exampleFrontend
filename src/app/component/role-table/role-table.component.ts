import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
// import { RecordService } from 'src/app/services/record.service'; 
import { Role } from 'src/app/model/role.model';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.css']
})
export class RoleTableComponent implements OnInit {
  roles: Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.fetchRoles();
  }

  fetchRoles(): void {
    this.roleService.getRoles().subscribe((data: Role[]) => {
      this.roles = data;
    });
  }

  onSubmit(): void {
    this.roles.forEach(role => {
      if (!role.authorization) {
        role.authorization = {
          authId: 0,
          postAuth: false,
          getAuth: false,
          deleteAuth: false,
          putAuth: false
        };
      }
    });

    this.roleService.updateRoles(this.roles).subscribe(() => {
      // Handle response if needed
      this.fetchRoles();  // Optionally refetch roles after update
    });

    location.reload();
  }
}
