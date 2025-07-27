import { Routes } from '@angular/router';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { CodeVerificationComponent } from './pages/code-verification/code-verification.component'; // 👈 Ajout
import { CreateAccountAvocatComponent } from './pages/create-account-avocat/create-account-avocat.component';
import { AiBotComponent } from './pages/ai-bot/ai-bot.component';
import { PdfPageComponent } from './pages/pdf-page/pdf-page.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstPageClientComponent } from './pages/first-page-client/first-page-client.component';
import { CreateAccountClientComponent } from './pages/create-account-client/create-account-client.component';
import { LoginPageClientComponent } from './pages/login-page-client/login-page-client.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { LoginPageAvocatComponent } from './pages/login-page-avocat/login-page-avocat.component';
import { FirstPageAvocatComponent } from './pages/first-page-avocat/first-page-avocat.component';
import { PageVerificationComponent } from './pages/page-verification/page-verification.component';
import { ProfilPageAvocatComponent } from './pages/profil-page-avocat/profil-page-avocat.component';
import { ProfilPageClientComponent } from './pages/profil-page-client/profil-page-client.component';
import { FormComponent } from './pages/form/form.component';


export const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'first-page-avocat', component: FirstPageAvocatComponent },
   { path: 'create-account-avocat', component: CreateAccountAvocatComponent },
   { path: 'login-page-avocat', component: LoginPageAvocatComponent },
   { path: 'password-reset', component: PasswordResetComponent },
   { path: 'code-verification', component: CodeVerificationComponent },
   { path: 'new-password', component: NewPasswordComponent },
   { path: 'page-verification', component: PageVerificationComponent },
   { path: 'profil-page-avocat', component: ProfilPageAvocatComponent },
   { path: 'profil-page-client', component: ProfilPageClientComponent },
   { path: 'ai-bot', component: AiBotComponent },
   { path: 'form', component: FormComponent },
   { path: 'pdf-page', component: PdfPageComponent },
   { path: 'create-account-client', component: CreateAccountClientComponent },
   { path: 'first-page-client', component: FirstPageClientComponent },
   { path: 'login-page-client', component: LoginPageClientComponent },
];


