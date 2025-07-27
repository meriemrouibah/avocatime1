import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-account-client.component.html',
  styleUrls: ['./create-account-client.component.css']
})
export class CreateAccountClientComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      nomComplet: ['', Validators.required],
      courriel: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
      numero: [''],
      adresse: [''],
      codePostal: ['']
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('Formulaire envoyé :', this.registerForm.value);
    // Ici tu peux appeler une API via HttpClient
  }

  goToLogin() {
    this.router.navigate(['/login-page-client']);
  }
}
