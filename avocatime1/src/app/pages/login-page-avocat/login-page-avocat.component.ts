import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page-avocat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page-avocat.component.html',
  styleUrls: ['./login-page-avocat.component.css']
})
export class LoginPageAvocatComponent {
  constructor(private router: Router) {} // ✅ Injection correcte

  goToCreateAccount() {
    this.router.navigate(['/profil-page']);
  }
  }
