import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// <<<<<<< HEAD
// <<<<<<< HEAD
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CreatnewpostComponent } from './creatnewpost/creatnewpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { PostfilterPipe } from './pipes/postfilter.pipe';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
    SubCategoriesComponent,
    CreatnewpostComponent,
    PostcontentComponent,
    PostfilterPipe,
    LandingpageComponent
  ],
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
//     SubCategoriesComponent,
    // SignInComponent
// >>>>>>> e34fcb97bd888f542cfeaeea76afd6515cb42391
// =======

// import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     AppComponent,

// >>>>>>> cfd38875c97c4abb6be2631feb2f91c5875f299a
//   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
// <<<<<<< HEAD
// <<<<<<< HEAD
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,

// =======
//     FormsModule,
// >>>>>>> e34fcb97bd888f542cfeaeea76afd6515cb42391
// =======
//     FormsModule,
//     ReactiveFormsModule,
// >>>>>>> cfd38875c97c4abb6be2631feb2f91c5875f299a
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
