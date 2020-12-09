import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public fb:FormBuilder,public router:Router, public signUpService: SignUpService) { }
  public userForm = this.fb.group({
    email:[],
    username:[''],
    password1:['',[Validators.minLength(8)]],
    password2:['',[this.validatePassword.bind(this)]]
  },this)
  public password1=false;
  public password1Msg;
  public username=false;
  public usernameMsg;
  public error;

  ngOnInit(): void {
  }
  validatePassword(max_control:AbstractControl){
    if(max_control.value){
      // console.log(max_control.value)
      // console.log(this)
      // console.log(this.userForm.controls['password1'].value)
      if(max_control.value != this.userForm.controls['password1'].value){
        return {"confirmPass": true}
      }else{
        return null;
      }
    }

  }
  signUp(){
    // console.log(this.userForm.controls['Email'])
    // let control = this.userForm.controls
    // let newUser ={email:control['Email'].value,username:control['Username'].value,password:control['Password'].value,c_password:control['C_Password'].value}
    console.log(this.userForm.value)
    this.signUpService.addNewUser(this.userForm.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(["/signIn"])
    },(err:HttpErrorResponse)=>{
      // let errInput = Object.keys(err.error)[0]
      // console.log(errInput)
      // console.log(err.error)
      // let allErrors = err.error.errInput
      // // console.log(errInput.map(inp=>err.error.password1))
      // console.log(allErrors)
      console.log(err.error)
      console.log(err)
      this.error = err.error
      Object.keys(err.error).map(itemField=>(console.log(itemField,this.error)))
      // if(Object.keys(err.error)[0]=="password1"){
      //   console.log(err.error.password1.map(errorr=>errorr))
      //   this.password1=true
      //   this.password1Msg=err.error.password1
      //   console.log(this.password1Msg)
      //   console.log(this.password1)
      // }
      // if(Object.keys(err.error)[0]=="username"){
      //   console.log(err.error.password1.map(errorr=>errorr))
      //   this.username=true
      //   this.usernameMsg=err.error.password1
      //   // console.log(this.password1Msg)
      //   // console.log(this.password1)
      // }
    })
    // this.router.navigate(["/signIn"])

  }

}
