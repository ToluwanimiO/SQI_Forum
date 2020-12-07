import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// <<<<<<< HEAD
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"signUp2",component:SignUpPhase2Component},
  {path:"editProfile",component:EditProfileComponent},
  {path:'home', component:HomeComponent},
  {path:'categories', children:[
      {path:'', component:CategoriesComponent},
      {path:'sub-categories', component:SubCategoriesComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
