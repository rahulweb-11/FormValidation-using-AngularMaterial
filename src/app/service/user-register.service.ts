import { UserModel } from '../../../Backend/models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  /*getCurrentData(){
    return this.userClient.get('http://localhost:3000/api/users/:id')
    }
  deleteUser(){
    return this.userClient.delete('http://localhost:3000/api/users/:id')
  }*/
  getUserById(_id){
    console.log("service",_id);
    let URL = "http://localhost:3000/api/users/"+_id
    console.log(URL);
   return this.userClient.get(URL)
  }

  editUser(userModel: UserModel){
    this.userClient.put("http://localhost:3000/api/editUsers", userModel)
    .subscribe(data=>{
      console.log("hii",data)
    })
  }

  deleteUser(_id){
    
    console.log("service",_id);
    let URL1 = "http://localhost:3000/api/delete/"+_id
    console.log(URL1);
  // return this.userClient.get(URL1)

    this.userClient.delete("http://localhost:3000/api/delete/"+_id)
    .subscribe(data=>{
      console.log("service" ,URL1)
  })
}
}
