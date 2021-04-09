import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
logged=new Subject<boolean>();
  constructor() { }
  login(token:string){
    localStorage.setItem("token",token);
    // localStorage.setItem("expiresIn" ,expires )
    this.setLoggedStatus(true)
  }
  logout(){
    localStorage.removeItem("token");
    // localStorage.removeItem("expiresIn");
    this.setLoggedStatus(false)
  }
  isLogged():boolean{
    let token=localStorage.getItem("token");
    // let expiresIn=localStorage.getItem("expiresIn");
    // let DateNow=new Date().getTime();
    // let expiresDate=new Date(expiresIn).getTime();
    // let expiryDate=expiresDate -DateNow
    if(token)
      return true
      return false;
  };
  getLoggedStatus(){
    return this.logged.asObservable()
  };
  setLoggedStatus(status:boolean){
    this.logged.next(status)
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
