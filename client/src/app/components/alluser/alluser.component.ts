import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../service/auth.service";

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
user: Array<any>= [];

  constructor(private authService:AuthService) {
  this.authService.fetchUsers().subscribe(data =>{
 this.user = data ;
// console.log("all user",data);
    });    }

  ngOnInit() {
  }

}
