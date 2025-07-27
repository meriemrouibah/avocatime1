import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-code-verification',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.css']
})
export class CodeVerificationComponent {
  code: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const storedCode = localStorage.getItem('verificationCode');

    if (this.code === storedCode) {
      alert('Code valide ! Redirection...');
      this.router.navigate(['/nouveau-mot-de-passe']);
    } else {
      alert('Code incorrect, veuillez réessayer.');
    }
  }

  resendCode(): void {
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('verificationCode', generatedCode);
    alert(`Nouveau code envoyé : ${generatedCode}`);
  }
}
