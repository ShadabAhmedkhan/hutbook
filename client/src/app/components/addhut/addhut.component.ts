import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HutService } from './../../service/hut.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { ValidateService } from './../../service/validate.service';

@Component({
  selector: 'app-addhut',
  templateUrl: './addhut.component.html',
  styleUrls: ['./addhut.component.css']
})
export class AddhutComponent implements OnInit {

//  HutForm: FormGroup;
  mapMarker: Object;
  name:String;
  images: Array<any> = [];


  zoom: number = 15;
  lat: number = 24.860170;
  lng: number = 66.863662;
 
        unit:String;
        rooms:number;
        maxPersonAllowed: number;
        address:String;
        location: String;
         latitude:number ; 
         longitude: number;
         rent:number;
         description: String;
        imgPaths:String;
      //  images: Array<any> = [];
  constructor(  private _flashMessagesService: FlashMessagesService,
  private hutService:HutService,
  private router:Router,
  private validate:ValidateService
  // private _formBuilder:FormBuilder 
  ) { 
    //  this.HutForm= this._formBuilder.group({ 
    //  name:['',Validators.required]
    //  unit:['',Validators.required],
    //  rooms:['',Validators.required],
    //  maxPersonAllowed:['',Validators.required],
    //  address:['',Validators.required],
    //  location:['',Validators.required],
    //  rent:['',Validators.required],
    //  description:['',Validators.required]
    // })
  }

  ngOnInit() {
  }

  clickedMarker(marker: marker, index:number){
    // console.log('clicked Marker', marker.name + 'at index' + index )
  }

  mapClicked($event:any){
    if(!this.mapMarker){
      var newMarker={
      name: this.name,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
    this.mapMarker =newMarker ;
    // console.log(this.mapMarker);
  }
  
  else{
    alert('you already have a marker');
  }
      }
markerDragEnd(marker: any, $event: any){
var updMarker = {
      name: marker.name,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
    this.mapMarker = updMarker;
    // console.log('updated',this.mapMarker);
    
  }

  onChange(images){
//     console.log('change',images.target.files);
//     // this.imagesToUpload = <Array<any>>images.target.files;
//     console.log("dsdp",images.target.files[0]['name']);
//         console.log("dsdp",images.target.files);
// var img :any = images.target.files;
//         console.log("dsdpss",img);

    this.hutService.uploadImage(images.target.files)
  }
addHut(){
  const hut={
         name : this.name,
         unit:this.unit,
          rooms:this.rooms,
          maxPersonAllowed:this.maxPersonAllowed,
          address:this.address,
          location:this.location,
          latitude:this.latitude,
         longitude: this.longitude,
         rent:this.rent,
         description: this.description
      // imgPath:this.imgPaths

   
  }
            console.log(hut);
      //all filed
    if(this.validate.ValidateRegister(hut)){
      this._flashMessagesService.show('Please fill all fields',{ cssClass: 'alert-danger' } );
      return false;
    }
       // console.log("sspp",this.imgPaths);

    this.hutService.addhut(hut,   this.mapMarker).subscribe(data => {//
      if(data.success){
            // console.log(data);

              this._flashMessagesService.show('your hut add', { cssClass: 'alert-success' } );
      }else{
        this._flashMessagesService.show('something went rong', { cssClass: 'alert-danger' } );

      }
    });
   
}
 

}

interface marker{
  name: string,
  lat: number,
  lng: number,
  draggable: boolean
}