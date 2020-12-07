import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public fb:FormBuilder,public signInService: SignInService, public router:Router) { }
  public userSignIn = this.fb.group({
    username:[''],
    password:['']
  })
  public invalidDetails = false;
  public token;
  ngOnInit(): void {
  }
  signIn(){
    // let controls = this.userSignIn.controls
    // let signedUser = {username:controls['Username'].value,password:controls['Password'].value}
    // console.log(signedUser)
    this.signInService.verifyLogin(this.userSignIn.value).subscribe((res:any)=>{
      this.token=res.key
      // route to home
      this.router.navigate(["/"])
      console.log(this.token)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.invalidDetails= true
    })
  }

}
