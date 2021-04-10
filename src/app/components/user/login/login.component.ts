import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../models/apiResponse';
import { Login } from '../../models/login';
import { LoginService } from './../../../services/login.service';
import { SharedService } from './../../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup
  constructor(private _formBuilder:FormBuilder, private _loginService:LoginService,
     private _sharedService:SharedService,private _router:Router) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){
    let user=new Login();
    user=this.form.value
    console.log(this.form.value);
    this._loginService.login(user).subscribe(res=>{
      console.log(res);
      let token = (res as ApiResponse).token;
      let expires:Date = (res as ApiResponse).expires;
      let exp=  new Date(expires).getTime()-120*1000*60;
      console.log(exp);
      console.log(new Date(exp));
      
      let now = new Date().getTime();
      let end = exp -now
      console.log(end);
      
      this._sharedService.login(token,+exp);
      this._router.navigateByUrl('getUsers')
    })
  }
}
