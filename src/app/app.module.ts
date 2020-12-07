import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// <<<<<<< HEAD
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SignUpPhase2Component,
    EditProfileComponent,
    UsernameValidatorDirective,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    CategoriesComponent,
    SubCategoriesComponent
// =======
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule} from '@angular/common/http';
// import { SignInComponent } from './sign-in/sign-in.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     HeaderComponent,
//     NavbarComponent,
//     CategoriesComponent,
//     SubCategoriesComponent
    // SignInComponent
// >>>>>>> e34fcb97bd888f542cfeaeea76afd6515cb42391
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
// <<<<<<< HEAD
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
// =======
//     FormsModule,
// >>>>>>> e34fcb97bd888f542cfeaeea76afd6515cb42391
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
