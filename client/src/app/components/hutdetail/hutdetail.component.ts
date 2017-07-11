import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {HutService} from '../../service/hut.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-hutdetail',
  templateUrl: './hutdetail.component.html',
  styleUrls: ['./hutdetail.component.css']
})
export class HutdetailComponent implements OnInit {
// id:string;
  hutObj: any;
  flag;
  reservedDates:any;
      zoom: number = 15;
   longitude:number;
   latitude:number;
  lat: number = 24.860170;
  lng: number = 66.863662;
  constructor(private route: ActivatedRoute, private hutService: HutService) {  
 
 this.route.queryParams.subscribe((params: any) =>{
      // console.log('query params',params);
      this.hutObj = params;
      console.log(  'hghg',  this.hutObj.longitude)
})

}
  clickedMarker(mapMarker){
    // console.log(mapMarker)
  }
  ngOnInit() {
  }

}
