import { AuthentificationService } from './../authentification.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  users=[];
  signupForm: FormGroup;
  user= new User();
  opened=true;


  constructor(private fb: FormBuilder,
              private auth:AuthentificationService,
              private router:Router

    ) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      'email' : [null,Validators.required],
      'password' : [null,Validators.required],
      'first_name' : [null,Validators.required],
      'last_name' : [null,Validators.required]
    });
    this.modifier();
    this.signup();
  }
signup(){
  const postData=new FormData();

  this.user.first_name=this.signupForm.get("first_name").value;
  this.user.last_name=this.signupForm.get("last_name").value;
  this.user.username=this.signupForm.get("email").value;
  this.user.password=this.signupForm.get("password").value;
  this.opened=this.auth.toggleSidebar(this.opened);
  postData.append("sinupdata",JSON.stringify(this.user));

 this.auth.signup(this.user).subscribe(
    (user) => { this.users=[];
      this.users=user;


      console.log(this.users);


    });

    this.router.navigate(['/posts',this.users[this.users.length-1].id+1]);
}
modifier(){
this.opened=this.auth.toggleSidebar(this.opened);
this.auth.booleanimport.subscribe({next:res=>this.opened=res});
}


}
