import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { Users } from './../../models/users';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users=[]
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(res=>{
      console.log(res);
      this.users.push(res)
      console.log(this.users[0]);
      
    })
  }
deleteUser(id:number){
  this._userService.deleteUser(id).subscribe(res=>{
    console.log(res);
    
  })
}
}
