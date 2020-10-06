import { UserModel } from '../../../Backend/models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  
  readonly baseURL = 'http://localhost:3000/api/postUser';

  constructor(private userClient: HttpClient){};
  
  postUser(userModel: UserModel){
    console.log("save User");
    this.userClient.post(this.baseURL, userModel)
    .subscribe(data=>{
      console.log(data)
    })
  };

  getUser(){
    return this.userClient.get('http://localhost:3000/api/users')
    
  }
}
