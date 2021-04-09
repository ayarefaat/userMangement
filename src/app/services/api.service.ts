import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }
  post(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"Content-Type":"application/json"}})
  }
}
