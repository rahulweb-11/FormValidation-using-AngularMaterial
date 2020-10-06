import { UserRegisterService } from './../service/user-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  //userModel = {}
  userModel = {
    "CustomerId": "",
    "FirstName": "",
    "LastName": "",
    "PhoneNo": "",
    "EmailId": "",
    "Address": "",
    "PinCode": ""
  }

  @ViewChild('postForm') postForm:NgForm
  constructor(private userRegistrationService: UserRegisterService) {

   }

  ngOnInit(): void {
    
  };

  

  onAddPost(form:NgForm){
   
    this.userRegistrationService.postUser(this.userModel);
     console.log(this.userModel)
     
  }

}
