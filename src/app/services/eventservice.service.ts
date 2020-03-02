import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor(private istek:HTTP) { }

  async getFeaturedEvents(){
    let url = 'https://unical.iku.edu.tr/feeder/main/eventsFeed.do?f=y&sort=dtstart.utc:asc&fexpr=(((vpath=%22/user/agrp_calsuite-MainCampus/yAk%C4%B1ng%C3%BC%C3%A7%20Oditoryumu%20ve%20Sanat%20Merkezi%22)))%20and%20(entity_type=%22event%22%7Centity_type=%22todo%22)&skinName=list-json&count=5';
    return await this.istek.get(url,{},{});
  }
  async getFutureEvents(){
    let url = 'https://unical.iku.edu.tr/feeder/main/eventsFeed.do?f=y&sort=dtstart.utc:asc&fexpr=(categories.href!=%22/public/.bedework/categories/sys/Ongoing%22)%20and%20(entity_type=%22event%22%7Centity_type=%22todo%22)&skinName=list-json&count=10';
    return await this.istek.get(url,{},{});
  }
  
}
