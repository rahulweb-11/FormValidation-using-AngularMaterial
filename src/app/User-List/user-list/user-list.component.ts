import { NgForm } from '@angular/forms';
import { UserRegisterService } from './../../service/user-register.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  public userData: any = [];
  
  constructor(private userRegistrationService: UserRegisterService) { }
   

  ngOnInit() {
    this.userData = this.userRegistrationService.getUser()
    .subscribe((response) => {
      console.log(response)
      const datas = JSON.stringify(response)
      console.log(datas)
      this.userData = JSON.parse(datas)
    });
  }
}
