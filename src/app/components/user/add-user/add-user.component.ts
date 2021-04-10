import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Users } from './../../models/users';
import { UserService } from './../../../services/user.service';
import { Response } from '../../models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
form:FormGroup;
isSuccessed:boolean=false
  constructor(private _formBuilder:FormBuilder,private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      categoryId:['',[Validators.required]],
      note:[null],
    })
  }
addUser(){
  // console.log(this.form.value);
  let user:Users =new Users();
  user=this.form.value;
  console.log(user);
  
  user.categoryId =+this.form.controls['categoryId'].value
  console.log(user);
  this._userService.addUsers(user).subscribe(res=>{
    console.log(res as Response);
    console.log((res as Response).key);
    let key = (res as Response).key
    if(key){
      alert("successfully added user");
      this.isSuccessed=true;
      this._router.navigateByUrl('getUsers')
    }else{
      alert("errror")
    }
  })
}
}
