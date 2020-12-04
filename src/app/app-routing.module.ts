import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"signUp2",component:SignUpPhase2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
