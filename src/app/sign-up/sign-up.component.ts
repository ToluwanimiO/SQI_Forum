import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public fb:FormBuilder,public router:Router) { }
  public userForm = this.fb.group({
    Email:[],
    Username:[''],
    Password:[''],
    C_Password:['']
  })

  ngOnInit(): void {
  }
  signUp(){
    // console.log(this.userForm.controls['Email'])
    let control = this.userForm.controls
    let newUser ={email:control['Email'].value,username:control['Username'].value,password:control['Password'].value,c_password:control['C_Password'].value}
    console.log(newUser)
    this.router.navigate(["/signIn"])

  }

}
