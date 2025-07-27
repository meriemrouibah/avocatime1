import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-bot.component.html',
  styleUrls: ['./ai-bot.component.css']
})
export class AiBotComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';

  scale: number = 1;

  ngOnInit() {
    this.calculateScale();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateScale();
  }

  calculateScale() {
    const designWidth = 1440;
    const designHeight = 1024;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleX = windowWidth / designWidth;
    const scaleY = windowHeight / designHeight;

    this.scale = Math.min(scaleX, scaleY);
  }

  onSubmit() {
    console.log('Formulaire soumis :');
    console.log('Nom complet :', this.fullName);
    console.log('Email :', this.email);
    console.log('Mot de passe :', this.password);
    console.log('Téléphone :', this.phone);
  }
}

