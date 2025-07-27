import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';      // ✅ pour la navigation
import { routes } from './app.routes';               // ✅ ton fichier existant avec les routes

@NgModule({
  declarations: [
    AppComponent,
    // tous tes composants ici si pas déjà déclarés dans un module séparé
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)     // ✅ connecte ton système de routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
