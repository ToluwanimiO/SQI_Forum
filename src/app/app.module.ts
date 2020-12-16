import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CreatnewpostComponent } from './creatnewpost/creatnewpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { PostfilterPipe } from './pipes/postfilter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {HttpConfigInterceptor} from './interceptors/http-config.interceptor';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule} from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { QuillModule } from 'ngx-quill';
import { FilterTextPipe } from './pipes/filter-text.pipe';
// import { AuthGuard } from './auth.guard';
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
    FooterComponent,
    ProfileComponent,
    LandingpageComponent,
    FilterTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    MatSnackBarModule,
    QuillModule.forRoot(), 
    BrowserModule, 
    // AuthGuard
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:HttpConfigInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
