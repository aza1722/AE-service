import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AdminCompaniesComponent } from './admin-companies/admin-companies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-companies', component: AdminCompaniesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'landing', component: LandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RegistroUsuarioComponent,
    AdminCompaniesComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
