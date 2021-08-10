import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  constructor(private http: HttpClient) { 
    const x = {};
  }

  hit_backend(what){
      // this.http.get('').map( data => {  console.log(data);
      // }); 


  // return this.http.get(`http://localhost:8080/${what}`);
  return this.http.get(`http://103.121.74.162:9095/${what}`);
  // return this.http.get(`https://angnodehw-309323.wl.r.appspot.com/${what}`);


  }

  

}
 