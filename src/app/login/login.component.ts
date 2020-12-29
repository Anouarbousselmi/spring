import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './../authentification.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
users=[];
user= new User();
opened=false;
msg="";
tag=true;


  constructor(private fb: FormBuilder,
    private auth:AuthentificationService,
    private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      'email' : [null,Validators.required],
      'password' : [null,Validators.required],
    });

    this.login();
    this.afficher();
  }

  login(){
    //get DATA from BACKEND by observable object created on athentificaton service
    this.auth.login(this.user).subscribe(
     data=>this.users=data);
      console.log(this.users);
     //identify  password and login of user
     for( let  i=0 ;i<this.users.length;i++){
      if(this.users[i].password==this.loginForm.get('password').value&&this.users[i].username==this.loginForm.get('email').value)
      {
        //if user exist  hide the backround component by using a boolean in *ngIf
        this.tag=this.auth.toggleSidebar(this.tag);
        this.router.navigate(['/posts',this.users[i].id]);
        //sotre data of users on memory
        localStorage.setItem('user', JSON.stringify(this.users[i]) );


      }
      else{
        this.msg=" Invalid Email or Password";
      }
     }

  }
  afficher(){
    this.auth.toggleSidebar(this.opened);
    console.log("bonjour");
    this.tag=this.auth.toggleSidebar(this.tag);

  }

}
