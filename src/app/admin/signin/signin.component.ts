import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from '../../models/user';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  userLogin:User;
  tokenData;
  error;
  user1:Observable<User>
  user:User;

  constructor(private authService: AuthService, private router: Router,private userService:UserService) { 
    this.userLogin = {'ID_USER':"", 'NAME_USER':'','LAST_NAME':'','EMAIL':'', 'IDENTIFICATION':'', 'LOGIN':'', 'PASSWORD_USER':'', 'STATE_ID_STATE':''};
  }

  ngOnInit() {
    this.isLoggedIn();
    this.redirectToHome();
  }

  onSignin() {
  	this.authService.signin(this.userLogin.LOGIN, this.userLogin.PASSWORD_USER)
  	.subscribe(
  		tokenData => this.tokenData = tokenData,
  		error => this.messageError(error),
      () => this.redirectToHome(),
  		);
  }

  redirectToHome(){
    if(this.tokenData != null){
      var idUser = localStorage.getItem('user');

      idUser = idUser.slice(1, -1);

      this.user1=this.userService.getUser(idUser);

      this.user1.subscribe(us=>{
        this.user=us;
        localStorage.setItem('ID_USER', this.user.ID_USER);
        this.router.navigate(['/smc/home']);
      });
    }
  }

  messageError(error:any){
    console.log(error);
    if(error != null){
      alert("Invalid login or password. Try again");
    }
  }

  isLoggedIn(){
    if(localStorage.getItem("user") != null){
      this.router.navigate(['/smc/home']);
    }
  }

}
