import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appUsernameValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: UsernameValidatorDirective,
    multi:true
  }]
})
export class UsernameValidatorDirective implements Validator {

  constructor() { }
  validate(control:AbstractControl){
    if(control.value){
      if(control.value=="tolu@gmail.com"){
        return {existsErr: true}
      }      
      else{
        return null;
      }
    }
  }

}
