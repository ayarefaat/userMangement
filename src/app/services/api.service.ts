import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient,private _sharedService:SharedService) { }
  post(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"Content-Type":"application/json"}})
  }
  get(url:string){
    return this._httpClient.get(`${environment.apiURL}/${url}`,{headers:{"Authorization":"Bearer "+this._sharedService.getToken()}})
  }
  postWithToken(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"Authorization":"Bearer "+this._sharedService.getToken()}})
  }
}
