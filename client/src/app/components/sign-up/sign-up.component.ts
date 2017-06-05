import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from "./../../service/auth.service";
import { ValidateService } from './../../service/validate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
name : String;
username:String;
email:String;
password: String;
  constructor(
    private validateService:ValidateService,
  private _flashMessagesService: FlashMessagesService,
  private authService:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  }
onRegisterSubmit(){
    const user = {
      name : this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log(user);
      //all filed
    if(!this.validateService.ValidateRegister(user)){
      this._flashMessagesService.show('plzzz fill all fields',{ cssClass: 'alert-danger' } );
      return false;
    }
    //email valid
 if(!this.validateService.validateEmail(user.email)){
      this._flashMessagesService.show('plzzz fill all correct email', { cssClass: 'alert-danger' } );
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
              this._flashMessagesService.show('you are register and can login', { cssClass: 'alert-success' } );
this.router.navigate(['/SignIn']);
      }else{
        this._flashMessagesService.show('something went rong', { cssClass: 'alert-danger' } );
this.router.navigate(['/SignUp']);
      }
    });
}
  

}
