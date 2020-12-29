import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup;
  post= new Post();
  opened=true;
  posts=[];

  constructor(private fb: FormBuilder,
    private auth:AuthentificationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      'description' : [null,Validators.required],

    });
    this.submit();
}
  submit(){

    const postData=new FormData();

    this.post.description=this.signupForm.get("description").value;

    this.opened=this.auth.toggleSidebar(this.opened);
    postData.append("sinupdata",JSON.stringify(this.post));

   this.auth.addpost(this.post,parseInt( this.route.snapshot.paramMap.get('id'))).subscribe(
      (Post) => { this.posts=[];
        this.posts=Post;


        console.log(this.posts);


      });


  }

  }

