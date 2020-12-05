import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creatnewpost',
  templateUrl: './creatnewpost.component.html',
  styleUrls: ['./creatnewpost.component.css']
})
export class CreatnewpostComponent implements OnInit {
  public createpost;
  constructor(public fb: FormBuilder) { }
  public useForm = this.fb.group({

    createpost: ["", [Validators.required]]
    // createpost: ['', [this.validateTextarea]],
  });


  // validateTextarea(control: AbstractControl): {[key: string]: any} | null {
  //   if (control.value) {
  //     return {value}
  //   }
  // }

  unordered() {
    // var x = document.createElement("OL");
    // x.setAttribute("id", "myO");
    // document.body.appendChild(x);
    // var y = document.createElement("OL");
    // var t = document.createTextNode("");
    // y.appendChild(t);
    // document.getElementById("myO").appendChild(y);
  }

  ordered() {
    // var a = document.getElementById("subject")
    var x = document.createElement("OL");
    x.setAttribute("id", "myOl");
    document.body.appendChild(x);
    var y = document.createElement("LI");
    var t = document.createTextNode("");
    y.appendChild(t);
    document.getElementById("myOl").appendChild(y);
  }
  underline() {

  }

  link() {

  }
  submitPost() {
    if (this.useForm) {
      let user = this.useForm.value;
      console.log(user)
    } else {
      console.log("THE INPUT YOU ENTER IS INCORRECT")
    }
  }


  ngOnInit(): void {
  }




  //   var changeFontStyle = function (font) { 
  //     document.getElementById( 
  //         "output-text").style.fontFamily 
  //                 = font.value; 
  // } 

}
