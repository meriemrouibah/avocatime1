import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account-avocat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-account-avocat.component.html',
  styleUrls: ['./create-account-avocat.component.css']
})
export class CreateAccountAvocatComponent {

  constructor(private router: Router) {}

  onSeConnecter() {
    this.router.navigate(['/login-page-avocat']);
  }

  onCreerCompte() {
    // Logique pour créer un compte ici
    this.router.navigate(['/profil-page']);
  }

  onGoogleLogin() {
    // Redirection ou appel au service Google
    console.log('Connexion avec Google...');
  }
}


