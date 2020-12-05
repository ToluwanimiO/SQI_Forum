import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatnewpostComponent } from './creatnewpost/creatnewpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatnewpostComponent,
    PostcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
