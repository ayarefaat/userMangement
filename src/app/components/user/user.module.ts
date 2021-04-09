import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'',component:LoginComponent}
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),CommonModule, FormsModule,ReactiveFormsModule 
      ]
})
export class UserModule { }
