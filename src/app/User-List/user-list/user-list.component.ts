import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserRegisterService } from './../../service/user-register.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  public userData: any = [];
  
  constructor(private userRegistrationService: UserRegisterService, private router: Router, private route: ActivatedRoute) { }
   
  id = this.route.snapshot.paramMap.get("_id");
 
  ngOnInit(): void {
     
     console.log(this.route.snapshot.paramMap);
     console.log("Hello from user list")

    this.userData = this.userRegistrationService.getUser()
   .subscribe((response) => {
      console.log(response)
      const data = JSON.stringify(response)
      console.log(data)
      this.userData = JSON.parse(data)
    });


}
    editUser(_id){
      this.router.navigate(['/update', _id])
      console.log(_id)
    }
  delete(_id){
  this.userRegistrationService.deleteUser(_id);
  console.log("userList", _id)
  this.userRegistrationService.getUser()
  }
}