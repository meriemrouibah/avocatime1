import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first-page-client.component.html',
  styleUrls: ['./first-page-client.component.css']
})
export class FirstPageClientComponent {
constructor(private router: Router) {}

goToPageCreateClient() {
    this.router.navigate(['/create-account-client']);
}
goToPageLoginClient() {
    this.router.navigate(['/login-page-client']);
}
}
