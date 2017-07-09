import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HutService } from './../../service/hut.service';
import {HutModel} from '../../modals/hutModel';
import {Router, NavigationExtras} from '@angular/router'

@Component({
  selector: 'app-myhuts',
  templateUrl: './myhuts.component.html',
  styleUrls: ['./myhuts.component.css']
})
export class MyhutsComponent implements OnInit {
  zoom: number = 15;
  lat: number = 24.860170;
  lng: number = 66.863662;
 Huts: Array<any>= [];

  constructor(private _flashMessagesService: FlashMessagesService,
  private hutService:HutService
  , private route: Router) 
  {
      hutService.getUserHuts().subscribe(data  => {
         if(data){
        // console.log('my huts', data)
      this.Huts =data;
     

           }
                  else{
  this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger' , timeout:3000})
                  }
    })
  }
   delete(hut, index){
    this.hutService.deleteHut(hut).subscribe(x =>{
      // console.log('deleted',x)
    });
    this.Huts.splice(index, 1);
          // console.log('deleted',hut.id)

  }

    update(hut, index){
    // let dates = hut.bookedDates.toString();
    let navigationExtras: NavigationExtras = {                            // passing this object in query params
      queryParams:{
        id: hut.id,
        name: hut.name,
       
        rooms: hut.rooms,
        mPAllowed: hut.mPAllowed,
       
        rent: hut.rent,
        description: hut.description,

      }

    }

    this.route.navigate(['update', index+1],navigationExtras)
  }
  ngOnInit() {
  }

}
