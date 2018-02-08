import { Component, OnInit } from '@angular/core';
import { User } from '../user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
   username: string;
   btnText: string ="Login"
   constructor(private user: User,private router: Router) {

  }
   setName(){
     this.user.setUserName(this.username);
     this.router.navigate(['/chat']);
   }



}
