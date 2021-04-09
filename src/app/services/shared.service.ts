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
    this.setLoggedStatus(true)
  }
  logout(){
    localStorage.removeItem("token")
  }
  isLogged():boolean{
    let token=localStorage.getItem("token");
    if(token==null)
    return false;
    return true
  };
  getLoggedStatus(){
    return this.logged.asObservable()
  };
  setLoggedStatus(status:boolean){
    this.logged.next(status)
  }
}
