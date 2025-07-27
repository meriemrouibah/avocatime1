import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-page-avocat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first-page-avocat.component.html',
  styleUrls: ['./first-page-avocat.component.css']
})
export class FirstPageAvocatComponent {
constructor(private router: Router) {}

goToPageCreateAvocat() {
    this.router.navigate(['/create-account-avocat']);
}
goToPageLoginAvocat() {
    this.router.navigate(['/login-page-avocat']);
}
}
