import { UserRegisterService } from './../service/user-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: [UserRegisterService]
})
export class UserRegistrationComponent implements OnInit {

  public userModel: any = [];
  //userModel = {}
  /*userModel = {
    "CustomerId": "",
    "FirstName": "",
    "LastName": "",
    "PhoneNo": "",
    "EmailId": "",
    "Address": "",
    "PinCode": ""
  }*/

  @ViewChild('postForm') postForm:NgForm
  constructor(public userRegistrationService: UserRegisterService,private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
     
 
    let id = this.route.snapshot.paramMap.get('_id');
    console.log("dddddd",id);

    /*this.userModel = this.userRegistrationService.getUserById(id)
    .subscribe((response) => {
      console.log(response)
      const data = JSON.stringify(response)
      console.log(data)
      this.userModel = JSON.parse(data)
    });*/
  };

  

  onAddPost(form:NgForm){
    if(form.value._id == ""){
      this.userRegistrationService.postUser(form.value);
    }else{
      this.userRegistrationService.editUser(form.value);
    }
  }
};