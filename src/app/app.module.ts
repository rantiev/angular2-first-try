import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MdInputModule,
  MdListModule,
  MdButtonModule,
  MdCheckboxModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
