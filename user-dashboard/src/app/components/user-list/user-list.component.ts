import { CommonModule } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  
})
export class UserListComponent implements OnInit {
  users: any[] = [];  


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();  
  }

  fetchUsers(page: number = 1) {
    this.userService.getUsers(page).subscribe(response => {
      this.users = response.data;  
    });
  }

  viewDetails(id: number) {
    this.router.navigate([`/user/${id}`]);
  }
}