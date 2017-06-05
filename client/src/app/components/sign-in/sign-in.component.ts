import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../service/auth.service";

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ValidateService } from './../../service/validate.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
email:String;
password: String;
  constructor(
private validateService:ValidateService,
  private _flashMessagesService: FlashMessagesService,
  private authService:AuthService,
  private router:Router
  ) { }
onLoginSubmit(){
    const user = {

      email: this.email,
      password: this.password
    }
    // console.log(user);
        //email valid
 if(!this.validateService.validateEmail(user.email)){
      this._flashMessagesService.show('plzzz fill all correct email', { cssClass: 'alert-danger' } );
      return false;
    }
    this.authService.authenticateUser(user).subscribe(data =>{
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
              this._flashMessagesService.show('you are loggin', { cssClass: 'alert-success' } );
this.router.navigate(['dashboard']);
      }else{
        this._flashMessagesService.show('something went rong', { cssClass: 'alert-danger' } );
this.router.navigate(['login']);
      }
});
}
  ngOnInit() {
  }

}
