import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [


  {path:'',redirectTo:'app.component',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'posts/:id',component:PostsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'signup-form',component:SignupFormComponent},
  {path:'posts',component:PostsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
