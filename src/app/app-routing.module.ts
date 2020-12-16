import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpPhase2Component } from './sign-up-phase2/sign-up-phase2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CreatnewpostComponent } from './creatnewpost/creatnewpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
// import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'', redirectTo:'/landingpage', pathMatch:'full'},
  {path:'landingpage', component:LandingpageComponent},
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"signUp2",component:SignUpPhase2Component},
  // {path:"editProfile",component:EditProfileComponent, canActivate:[UserguardGuard]},
  {path: "create", component: CreatnewpostComponent},
  // {path: "create", component: CreatnewpostComponent, canActivate: [AuthGuard]},
  {path: "postcontent/:slug/:id", component: PostcontentComponent},
  {path:'home', component:HomeComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:'categories', children:[
      {path:'', component:CategoriesComponent},
      {path:':name', component:SubCategoriesComponent}
  ]},
  {path:"**", component:NotfoundComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
