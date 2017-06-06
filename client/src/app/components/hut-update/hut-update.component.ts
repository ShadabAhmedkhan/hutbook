import { Component, OnInit } from '@angular/core';
import { HutService } from './../../service/hut.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
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
  constructor( private hutService:HutService,
  private route: ActivatedRoute
  ) {

 this.route.queryParams.subscribe((params: any) =>{
      console.log('query params',params);
      this.hut = params;
      console.log(  'hghg',  this.hut.id)
})

}



updhut(){
   const uphut={
    
         name : this.name,
        
          rooms:this.rooms,
          maxPersonAllowed:this.maxPersonAllowed,
      
         rent:this.rent,
         description: this.description 

  }
     console.log('form',uphut,this.hut.id);
    this.hutService.updateHut(uphut,this.hut.id).subscribe(data =>{
      console.log(data);
    })
}

  ngOnInit() {
  }

}
