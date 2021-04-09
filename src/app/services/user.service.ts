import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _apiService:ApiService) { }
  getUsers(){
    return this._apiService.get('JobEstimator/clients')
  }
}
