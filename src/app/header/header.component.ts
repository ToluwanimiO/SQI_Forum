import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UsersService) { }
  public loading =false;
  public LoginStatus;
  public userDet;
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(userDetails=>{
      this.LoginStatus = true;
      this.userDet = userDetails
      this.loading = true;
        console.log(userDetails)
    },(err:HttpErrorResponse)=>{
      this.LoginStatus = false;
      console.log(err)
    })
  }

}
