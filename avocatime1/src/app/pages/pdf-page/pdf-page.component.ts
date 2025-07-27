import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.css']
})
export class PdfPageComponent {
constructor(private router: Router) {}

  goToPageCompte() {
    this.router.navigate([`/profil-page-avocat`]);
  }
}
