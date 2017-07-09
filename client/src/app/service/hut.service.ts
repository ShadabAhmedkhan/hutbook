import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {HutModel} from '../modals/hutModel';
@Injectable()
export class HutService {
  imgPaths:  Array<String>=[]
  hash: Array<any[]>
  data;
  newHut:any={
      email: String,
      name: String,
      unit: String,
      rooms: Number,
      maxPersonAllowed: Number,
      address: String,
      location: String,
      latitude: Number,
      longitude: Number,
      rent: Number,
      description: String,
      imgPath:Array,
      bookedDates: Array
  }
  constructor(private http:Http) { 
    // this.isDev = true;
  }
  addhut(hutDetails , locObj){//
    // console.log(hut);
    let user = JSON.parse(localStorage.getItem('user'));

    this.newHut = {
      email: user.email,
      name: hutDetails.name,
      unit: hutDetails.unit,
      rooms: hutDetails.rooms,
      maxPersonAllowed: hutDetails.maxPersonAllowed,
      address: hutDetails.address,
      location: hutDetails.location,
      latitude: locObj.lat,
      longitude: locObj.lng,
      rent: hutDetails.rent,
      description: hutDetails.description,
imgPath :this.imgPaths,
      bookedDates: []
      
    }
      //  console.log('datap', this.imgPaths);

    let headers = new Headers();
    headers.append('Content-Type','application/json');
        // let ep = this.prepEndpoint('users/register');

    return this.http.post('https://meanapp-hutbooking.herokuapp.com/hut/addhut',this.newHut,{headers:headers})
    .map(res => res.json());


   }
uploadImage(image){
  // console.log("ya han data mil raha hai", image[0]);

  var formData: any = new FormData();
    // console.log('but formdata null arah hai', formData);


  // let images: Array<any> = imagesArray();
  formData.append('images', image[0]);
  // formData.append('uploads', image[0]);
  // console.log('dataaa',  formData);
// console.log('dataaq',formData.get('images'))
  
  let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('https://meanapp-hutbooking.herokuapp.com/hut', formData, {headers: headers})
    .map(res => res.json()).subscribe(imgData =>{
      this.imgPaths.push(imgData.path)
    });
}
// uploadImage(image){
//   // console.log(image[0]);
//   let formData: any = new FormData();
//   // let images: Array<any> = imagesArray
//   formData.append('uploads', image[0]);
//   // console.log('data', formData.get('uploads'));
// console.log('dataa',formData.get('uploads'));
  
//   let headers = new Headers();
//     // headers.append('Content-Type', 'application/json');
//     return this.http.post('http://localhost:3000/hut/', formData,{headers: headers})
//     .map(res => res.json()).subscribe(imgData =>{
//       this.imgPaths.push(imgData.path)
//     });
// }


   fetchHuts(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://meanapp-hutbooking.herokuapp.com/hut/huts', {headers: headers})
    .map(res => res.json())
  }
getUserHuts(){
    let userinfo = JSON.parse(localStorage.getItem('user'));
    let user = {
      email: userinfo.email
    };
    // console.log(userinfo.email)
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://meanapp-hutbooking.herokuapp.com/hut/huts/'+userinfo.email, {headers: headers})
    .map(res => res.json());
}

  deleteHut(hutInfo){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('https://meanapp-hutbooking.herokuapp.com/delete/'+hutInfo.id , {headers: headers})

}

booking(hutInfo){
  // console.log('aaa',hutInfo)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://meanapp-hutbooking.herokuapp.com/hut/book', hutInfo, {headers: headers})
    .map(res => res.json());
  }











updateHut(hutInfo,id){
  console.log('id', id )
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('https://meanapp-hutbooking.herokuapp.com/hut/update/'+id,hutInfo , {headers: headers})
    .map(res => res.json());
}
}
