import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  standalone: true, // ✅ Composant autonome
  imports: [CommonModule, FormsModule, RouterModule], // ✅ Dépendances requises
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email) {
      alert('Veuillez entrer votre email.');
      return;
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('verificationCode', verificationCode);
    localStorage.setItem('email', this.email);

    alert(`Code envoyé : ${verificationCode} (Simulation)`);
    this.router.navigate(['/code-verification']);
  }
}


