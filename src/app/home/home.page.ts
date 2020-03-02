import { Component } from '@angular/core';
import { EventserviceService } from '../services/eventservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  featEvents:any;
  futEvents:any; 
  constructor(private events:EventserviceService) {
    this.featuredEvents();  
  }
  

  featuredEvents(){
    this.events.getFeaturedEvents().then(result=>{
      this.featEvents = JSON.parse(result.data); 
      //alert(result.data ); 
      this.futureEvents();
    });
  }
  futureEvents(){
    this.events.getFutureEvents().then(result=>{
      this.futEvents = JSON.parse(result.data);
     // alert(result);
    })
  }
  hasImage(arr:any){
    if(arr.hasOwnProperty('2')){
      if(arr['2'].hasOwnProperty('X-BEDEWORK-IMAGE')){
        return true;
      }
    }
    if(arr.hasOwnProperty('3')){
      if(arr['3'].hasOwnProperty('X-BEDEWORK-IMAGE')){
        return true;
      }
    }
    if(arr.hasOwnProperty('4')){
      if(arr['4'].hasOwnProperty('X-BEDEWORK-IMAGE')){
        return true;
      }
    }
    if(arr.hasOwnProperty('5')){
      if(arr['5'].hasOwnProperty('X-BEDEWORK-IMAGE')){
        return true;
      }
    }
    return false;
  }

}
