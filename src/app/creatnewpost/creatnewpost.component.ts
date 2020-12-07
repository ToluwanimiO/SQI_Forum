import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-creatnewpost',
  templateUrl: './creatnewpost.component.html',
  styleUrls: ['./creatnewpost.component.css']
})
export class CreatnewpostComponent implements OnInit {


  constructor(public fb: FormBuilder, public postcate: PostserviceService) { }
  public useForm = this.fb.group({
    category: [''],
    title: [''],
    body: ['']
    // createpost: [""],
  });

  public filterText;
  public posts = [];
  public categories;
  // public test = ["hey", "gedu"]

  // ordered() {
  //   let subject = document.getElementById('subject');
  //   let check = 0;
  //   check += 1;
  //   let start = "<ol>";
  //   for (var i = 1; i <= check; i++) {
  //     start += "<li></li>";
  //   }
  //   start += "</ol>";

  //   subject.innerHTML = start;
  // }

  submitPost() {
    if (this.useForm) {
      console.log("hi")
      let user = this.useForm.value;
      this.postcate.postText(user).subscribe((res:any) => {
        console.log(res)
      })
      console.log(user)
    } else {
      console.log("THE INPUT YOU ENTER IS INCORRECT")
    }
  }


  ngOnInit(): void {
    this.postcate.getCategories().subscribe(a => {
      this.categories = a;
      console.log(this.categories)
    })
  }
}
