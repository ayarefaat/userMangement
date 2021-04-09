import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login';
import { LoginService } from './../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup
  constructor(private _formBuilder:FormBuilder, private _loginService:LoginService) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){
    let admin=new Login();
    admin=this.form.value
    console.log(this.form.value);
    this._loginService.login(admin).subscribe(res=>{
      console.log(res);
    })
  }

}
