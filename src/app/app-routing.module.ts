import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatnewpostComponent } from './creatnewpost/creatnewpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  {path: "creatnewpost", component: CreatnewpostComponent},
  {path: "postcontent", component: PostcontentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
