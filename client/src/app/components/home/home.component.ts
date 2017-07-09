import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HutService } from './../../service/hut.service';
import {HutModel} from '../../modals/hutModel';
import {Router, NavigationExtras} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    zoom: number = 15;
  lat: number = 24.860170;
  lng: number = 66.863662;
  myHuts: Array<any>= [];
Huts: Array<any>= [];
  constructor(private _flashMessagesService: FlashMessagesService,
  private hutService:HutService, private route: Router) {
// ya code theik hai 

                hutService.fetchHuts().subscribe(data => {
                  if(data){
                    console.log('all huts', data)
                  this.Huts = data
        // console.log('ya object ma arhar hai',  this.Huts )

                  
                }
                
     
                  else{
                    this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger' , timeout:3000})
                  }
                })
                 // ya code theik hai 
  }
   clickedMarker(mapMarker){
    // console.log(mapMarker)
  }
   hutdetail(hut, index){
    // let dates = hut.bookedDates.toString();
    let navigationExtras: NavigationExtras = {                            // passing this object in query params
      queryParams:{
        id: hut.id,
        name: hut.name,
       
        rooms: hut.rooms,
        maxPersonAllowed: hut.maxPersonAllowed,
       
        rent: hut.rent,

         unit:hut.unit,
          address:hut.address,
          location:hut.location,
          latitude:hut.latitude,
         longitude: hut.longitude,
         description: hut.description
      }

    }

    this.route.navigate(['hutdetail', index+1],navigationExtras)
  }

  ngOnInit() {
  }
  
  

}
