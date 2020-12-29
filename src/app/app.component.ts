import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs/operators';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyInstagram';
  constructor(private auth:AuthentificationService) { }
  sideBarOpen = true;
  hide:boolean;

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
toggle(){
 return this.hide=this.auth.toggleSidebar(this.hide);

}
}
