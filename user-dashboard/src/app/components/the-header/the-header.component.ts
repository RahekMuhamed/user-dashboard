import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-the-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-header.component.html',
  styleUrl: './the-header.component.css'
})
export class TheHeaderComponent {
  notFoundMessage: string | null = null;

  constructor(private router: Router) { }

  onSearch(value: string) {
    const id = parseInt(value, 10);
    if (!isNaN(id)) {
      this.router.navigate([`/user/${id}`]).then(success => {
        if (!success) {
          this.showErrorAlert('User not found.');
        }
      }).catch(() => {
        this.showErrorAlert('User not found.');
      });
    } else {
      this.showErrorAlert('Please enter a valid ID.');
    }
  }

  showErrorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }
}