import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
  
    if (id) {
      this.userService.getUserById(id).subscribe(response => {
        this.user = response.data; 
        console.log('User data:', this.user); 
      });
    } else {
      this.showErrorAlert('Invalid user ID');
    }
  }
  
  

  
  
  goBack() {
    this.router.navigate(['/user-list']);
  }
  showErrorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }
}
