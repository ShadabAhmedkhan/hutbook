import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
      private _flashMessagesService: FlashMessagesService,
  private authService:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  }

logout(){
    this.authService.logout();
    this._flashMessagesService.show('you are logged out', {cssClass: 'alert-danger', timeout: 3000});
    this.router.navigate(['/SignIn']);
    return false;
  }
}
