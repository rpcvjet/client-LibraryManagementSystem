import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '@front-lms/material';

import { MatAutocompleteModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    NxModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
