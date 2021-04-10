import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
logged=new Subject<boolean>();
tokenTimer;
  constructor(private _router:Router) { }
  login(token:string,expires:any){
    localStorage.setItem("token",token);
    localStorage.setItem("expiresIn" ,expires )
    this.setLoggedStatus(true);
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    this.setLoggedStatus(false);
    clearTimeout(this.tokenTimer);
  }
  isLogged():boolean{
    let token=localStorage.getItem("token");
    let expiresIn=localStorage.getItem("expiresIn");
    let DateNow=new Date().getTime();
    // let expiresDate=new Date(expiresIn).getTime();
    let expiryDate=+expiresIn-DateNow
    if(token && expiryDate > 0)
     { this.autoLogout(expiryDate)
       return true
      }else{
        this.logout();
        return false;
      }
      
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
  autoLogout(expirationDate:number){
    this.tokenTimer=setTimeout(()=>{
      this.logout();
      this._router.navigateByUrl('')
    },expirationDate);
    
  }
}
