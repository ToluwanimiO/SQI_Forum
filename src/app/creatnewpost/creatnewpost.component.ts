import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-creatnewpost',
  templateUrl: './creatnewpost.component.html',
  styleUrls: ['./creatnewpost.component.css']
})
export class CreatnewpostComponent implements OnInit {
  // useForm: FormGroup;
  // bodyContent: string;

  constructor(public fb: FormBuilder, public PostserviceService: PostserviceService, public postcate: PostserviceService ,public router:Router, public route: ActivatedRoute, public post: PostserviceService) { }
  public useForm = this.fb.group({
    category:Number,
    title: [''],
    body: ['']
    // createpost: [""],
  });

  public postCate = "";
  public filterText;
  public posts = [];
  public categories;
  public loading = true;
  public submitStatus;
  public disabled = false;
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
  setDisabled(){
    this.disabled = true;
  }
  submitPost() {
    // if (this.useForm) {
      console.log(this.useForm.controls['category'])
      let user = this.useForm.value;
      let newNumber = Number(this.useForm.controls['category'].value)
      let newPost = {category:newNumber,title:this.useForm.controls['title'].value,body:this.useForm.controls['body'].value}
      console.log(newPost)
      console.log(typeof(newNumber))
      this.postcate.postText(newPost).subscribe((res:any) => {
        console.log(res);
        this.submitStatus = "Your post was succesful"
        this.useForm.reset()
        // this.router.navigate(["/home"])                       
      },(err:HttpErrorResponse)=>{
        this.submitStatus = "Your post was not succesful, Ensure all fields have been filled"
        console.log(err);
        // this.router.navigate(["/home"])
      })
      // console.log(user)
    // } else {
    //   console.log("THE INPUT YOU ENTER IS INCORRECT")
    // }
  }
  
 

  

  ngOnInit(): void {
    this.loading = true;
    this.postcate.getCategories().subscribe(a => {
      this.loading= false
      this.categories = a.body;
      console.log(this.categories)
    })
    this.route.params.subscribe(param => {
      console.log(param.id)
      this.getPost(param.id);
    })
  }

 public getPost(id: string): void {
      this.PostserviceService.getPost(id).subscribe(data => 
        this.post = data.result);
  }

  maxlength(event) {
    if (event.body.getLength() > 10) {
      event.body.deleteText(10, event.body.getLength())
    }
  }
}
