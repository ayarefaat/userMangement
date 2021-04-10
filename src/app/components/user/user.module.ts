import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { AuthGuard } from 'src/app/auth.guard';
import { AddUserComponent } from './add-user/add-user.component';


const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'getUsers',component:GetUsersComponent,canActivate:[AuthGuard]},
  {path:'addUser',component:AddUserComponent,canActivate:[AuthGuard]},
]

@NgModule({
  declarations: [LoginComponent, LogoutComponent, GetUsersComponent, AddUserComponent],
  imports: [
    RouterModule.forChild(routes),CommonModule, FormsModule,ReactiveFormsModule 
      ]
})
export class UserModule { }
