import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { GetUsersComponent } from './get-users/get-users.component';


const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'getUsers',component:GetUsersComponent},
]

@NgModule({
  declarations: [LoginComponent, LogoutComponent, GetUsersComponent],
  imports: [
    RouterModule.forChild(routes),CommonModule, FormsModule,ReactiveFormsModule 
      ]
})
export class UserModule { }
