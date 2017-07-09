import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {

  authToken :any;
  user:any;

isDev:boolean;
  constructor(private http:Http) { 
    this.isDev = true;
  }

  registerUser(user){
    // console.log(user);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
        // let ep = this.prepEndpoint('users/register');

    return this.http.post('https://meanapp-hutbooking.herokuapp.com/users/register',user,{headers:headers})
    .map(res => res.json());
  }
  authenticateUser(user){
        // console.log(user);

        let headers = new Headers();
    headers.append('Content-Type','application/json');
    // let ep = this.prepEndpoint();
    return this.http.post('https://meanapp-hutbooking.herokuapp.com/users/authenticate',user,{headers:headers})
    .map(res => res.json());
  }
  getProfile(){
     let headers = new Headers();
     this.loadToken();
     headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    // // let ep = this.prepEndpoint(');
    return this.http.get('https://meanapp-hutbooking.herokuapp.com/users/profile',{headers:headers})
    .map(res => res.json());
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken= token;
    this.user = user;
  }
  loadToken(){
    const token= localStorage.getItem('id_token');
    this.authToken= token;
  }
  loggedIn(){
        // console.log(tokenNotExpired(null, localStorage.getItem('id_token')));

 return tokenNotExpired(null, localStorage.getItem('id_token'));       }
  
  logout(){
    this.authToken= null;
    this.user = null;
    localStorage.clear();
  }
  fetchUsers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // localhost:3000/users/alluser
    return this.http.get('https://meanapp-hutbooking.herokuapp.com/users/alluser', {headers: headers})
    .map(res => res.json())
  }
}
