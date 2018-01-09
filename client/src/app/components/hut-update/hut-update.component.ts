import { Component, OnInit } from '@angular/core';
import { HutService } from './../../service/hut.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
@Component({
  selector: 'app-hut-update',
  templateUrl: './hut-update.component.html',
  styleUrls: ['./hut-update.component.css']
})
export class HutUpdateComponent implements OnInit {

     name:String;
        hut :any;
        rooms:number;
        maxPersonAllowed: number;
        rent:number;
        description: String;
        updateForm: FormGroup;
  constructor( private hutService:HutService,
  private route: ActivatedRoute,
  private _formBuilder: FormBuilder,
  private _location: Location,
  
  ) {
    this.route.queryParams.subscribe((params: any) =>{
      // console.log('query params',params);
      this.hut = params;
      console.log(  'update',  this.hut.id)
      // this.route.queryParams.subscribe((params: any)=>{
      //   this.id = params['id']
      // })
      this.updateForm= this._formBuilder.group({ 
    
        name:[params['name'],Validators.required],
        rooms:[params['rooms'],Validators.required],
        maxPersonAllowed:[params['maxPersonAllowed'],Validators.required],
        rent:[params['rent'],Validators.required],
        description:[params['description'],Validators.required],
      })
})
 this.route.queryParams.subscribe((params: any) =>{
      // console.log('query params',params);
      this.hut = params;
      // console.log(  'hghg',  this.hut.id)
})

}



updhut(){
  //  const uphut={
    
  //        name : this.name,
        
  //         rooms:this.rooms,
  //         maxPersonAllowed:this.maxPersonAllowed,
      
  //        rent:this.rent,
  //        description: this.description 

  // }
    //  console.log('form',uphut,this.hut.id);
    this.hutService.updateHut(this.updateForm.value,this.hut.id).subscribe(data =>{
      // console.log(data);
    })
    this._location.back();
}

  ngOnInit() {
  }

}
