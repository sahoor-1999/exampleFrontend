// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RoleTableComponent } from './component/role-table/role-table.component';
import { RoleNewComponent } from './component/role-new/role-new/role-new.component';
import { HeaderComponent } from './component/header/header/header.component';
import { HomeComponent } from './component/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
  

@NgModule({
  declarations: [
    AppComponent,
    RoleTableComponent,
    RoleNewComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
