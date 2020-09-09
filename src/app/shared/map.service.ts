import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Map } from './map.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'elasticsearch-browser';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3RyaW5nIHN0cmluZyIsImlkIjoxLCJlbWFpbCI6InN0cmluZyIsIm1vYmlsZU5vIjoiODA3MjgyODY0NCIsIlJvbGVOYW1lIjoiQWRtaW4iLCJ2ZW5kb3JJZCI6MCwiaWF0IjoxNTk4OTMyOTg4LCJleHAiOjE2MDE1MjQ5ODh9.INpHMJk_xKXVgCW7XGYi2RC9Emy0-qE37-4Xzr2kQ1I'
}
const request = {                                                                                                                                                                                 
  headers: new HttpHeaders(header), 
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public polycoords = new BehaviorSubject<any>([]);
  currentcoords = this.polycoords.asObservable();
  formdata:Map;
  list : Map[];
  loccords: Map[];
  readonly rootURL ="http://[::1]:3000/locations/"
  

  constructor(public http : HttpClient) {
    this.formdata = {
      geofence: [],
      name:"",
      shortCode:""

    }
    if (!this.client) {
      this.connect();
    }
   }
 


   private client: Client;

  
 
   private connect() {
     this.client = new Client({
       host: 'http://localhost:9200'
      
     });
   }
 
   isAvailable(): any {
     return this.client.ping({
       requestTimeout: Infinity,
       body: 'working'
     });
   }
   private alldata = {
    'query': {
      'match_all': {}
    }
  };
 
  // getes(index, type): any {
  //   return this.client.search({
  //     index: index,
  //     type: type,
  //     body: this.alldata,
  //     filterPath: ['hits.hits._source']
  //   });
  // }
 
   addToIndex(value): any {
     return this.client.create(value);
   }









  postmap(formdata : Map){
    console.log(formdata)
    
   return this.http.post(this.rootURL,formdata,request);
    
  }
 
  
  

  changeCoords(coordsval: Array<any>) {
    this.polycoords.next(coordsval);
   
    this.formdata.geofence= coordsval
    
  }
  
  refreshList(){
    this.http.get(this.rootURL)
    .toPromise().then(res => this.list = res as Map[]);
    
  }
  deleteloc(id : number){
    return this.http.delete(this.rootURL+id);
   }
   getmap(id:number){
     console.log(id)
   this.http.get(this.rootURL+id)
    .toPromise().then(res => this.loccords = res as Map[]);
   
    


     
   }

  
}