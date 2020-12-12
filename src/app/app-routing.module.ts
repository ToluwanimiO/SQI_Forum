import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// <<<<<<< HEAD
// <<<<<<< HEAD
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CreatnewpostComponent } from './creatnewpost/creatnewpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  {path:'', redirectTo:'/landingpage', pathMatch:'full'},
  {path:'landingpage', component:LandingpageComponent},
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"signUp2",component:SignUpPhase2Component},
  {path:"editProfile",component:EditProfileComponent},
  {path: "create", component: CreatnewpostComponent},
  {path: "postcontent/:slug/:id", component: PostcontentComponent},
  {path:'home', component:HomeComponent},
  
  {path:'categories', children:[
      {path:'', component:CategoriesComponent},
      {path:'sub-categories', component:SubCategoriesComponent}
  ]},
  
]
// =======

// const routes: Routes = [
//   { path: '', redirectTo: "/home", pathMatch: 'full' },
  
// ];
// >>>>>>> cfd38875c97c4abb6be2631feb2f91c5875f299a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
