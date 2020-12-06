import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public fb:FormBuilder) { }
  public userSignIn = this.fb.group({
    Username:[''],
    Password:['']
  })
  ngOnInit(): void {
  }
  signIn(){
    let controls = this.userSignIn.controls
    let signedUser = {username:controls['Username'].value,password:controls['Password'].value}
    console.log(signedUser)
  }

}
