import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicatorService } from '../communicator.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-watch-desc',
  templateUrl: './watch-desc.component.html',
  styleUrls: ['./watch-desc.component.css']
})
export class WatchDescComponent implements OnInit {
  
  public result = {} ;
  public video= {};



  // public id;
  // public category;

  isDataAvailable(){
    // console.log(this.result);
      let x = Object.keys(this.result).length > 5
      // console.log(x);
      return x;
  }

  constructor(private route: ActivatedRoute,private _communicatorservice : CommunicatorService) { }


  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  public button_text = ''
  public alert_type = 'success' ;
  public item_to_add;
  public catid;
  

  // @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;


  ngOnInit(): void {

    // let id = this.route.snapshot.paramMap.get('id');
    // let category = this.route.snapshot.paramMap.get('category');
    function add_to_localstorage(item_to_add){

      let visited = new Array();
      
      if (localStorage.getItem('visited')!=null){
        visited = JSON.parse(localStorage.getItem('visited'));
      }

      if ( !visited.includes(item_to_add) ){
          // object not present        

      }
      else{
        // object already present
        visited.splice(visited.indexOf(item_to_add),1)
      }

    
      visited.push(item_to_add);
        
      if (visited.length>24){
        visited.splice(0,1);
      }

        // }
      localStorage.setItem('visited',JSON.stringify(visited) );
      // localStorage.setItem('count',JSON.stringify(latest_count) );
     
      
    }

    this.route.paramMap.subscribe((params :ParamMap) => {
      let id = params.get('id');
      let category = params.get('category');

      

      // console.log(category+'/'+id);
      
      this. _communicatorservice.hit_backend(`details/${category}/${id}`).subscribe(
      data => {

        
        let string =JSON.stringify(data); 
        this.result=JSON.parse(string);
        this.result['enc_title'] = encodeURIComponent(this.result['name']);

        this.item_to_add = `${category}|${id}|${this.result['poster_path']}|${this.result['name']}`
        this.catid = `${category}|${id}`
        add_to_localstorage(this.item_to_add);
        if(this.inWatchlist(this.item_to_add,this.catid))
          this.button_text = 'Remove from Watchlist';
        else
          this.button_text = 'Add to Watchlist';
        
        // close the alert when change
        if (this.selfClosingAlert){
        this.selfClosingAlert.close();
        }

        // scroll to top when change
        window.scrollTo(0, 0);  
      }
    );

    this. _communicatorservice.hit_backend(`video/${category}/${id}`).subscribe(
      data => {


        let string =JSON.stringify(data); 
        this.video=JSON.parse(string);
        // console.log(this.video);

      }
    );


    
    });

    // this.route.params.subscribe()
    this._success.subscribe(message => this.successMessage = message);

    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
    

    
  }

  public inWatchlist(item_to_add,catid) { //https://www.themoviedb.org/talk/5963ae4ac3a36828a1110612 - Do Movie IDs ever change? NO
    let watchlist =[];
    let watchlist_hash = [];

    if (localStorage.getItem('watchlist')!=null){
      watchlist = JSON.parse(localStorage.getItem('watchlist'));
      watchlist_hash = JSON.parse(localStorage.getItem('watchlist_hash')); //must exist if watchlist exists
    }

    /// patch fix for poster change
    if ( watchlist_hash.includes(catid) ){ // hash has the item -> 2 possible scenarios -> a. watchlist has the same poster_path/name {then do nothing extra} b. watchlist has different poster_path/name {change update in watchlist}

      if(!watchlist.includes(item_to_add)) // different poster_path and name
      {
        // update the poster_path in the actual watchlist
        let index = watchlist_hash.indexOf(catid)
        watchlist[index] = item_to_add; 
        localStorage.setItem('watchlist',JSON.stringify(watchlist) );
        // localStorage.setItem('watchlist_hash',JSON.stringify(watchlist_hash) ); // commented as not required (update only changes watchlist value; not index so no need to update hash)
      }
      // else{ // same poster_path and name -> do nothing 

      // }

    }
    // else{ //if hash doesnt contain the item, watchlist doesnt either so do nothing extra 
          
          // do nothing so commented
    // }


    return watchlist.includes(item_to_add);
  }

  public add_remove_watchlist(item_to_add,catid) { 
  
    // let watchlist_count = 0;
    let watchlist =[];
    let watchlist_hash=[];
    let wl_action = '';

    // let item_to_add=`${category}|${id}|${poster_path}|${caption}`;

    // console.log(item_to_add)
    // console.log(catid)

    if (localStorage.getItem('watchlist')!=null){
      watchlist = JSON.parse(localStorage.getItem('watchlist'));
      watchlist_hash = JSON.parse(localStorage.getItem('watchlist_hash'));
    }


    
    if ( !watchlist.includes(item_to_add) ){ 

      
      watchlist.push(item_to_add);
      watchlist_hash.push(catid); // keep hash in sync
      
    
      
      // add it
      localStorage.setItem('watchlist',JSON.stringify(watchlist) );
      localStorage.setItem('watchlist_hash',JSON.stringify(watchlist_hash) ); // keep hash in sync
      this.button_text = 'Remove from Watchlist'
      this.alert_type = 'success';
      wl_action = 'Added to'
      

    }
    else{ 
      
      //remove
      let index = watchlist.indexOf(item_to_add)
      watchlist.splice(index,1);
      watchlist_hash.splice(index,1); // keep hash in sync

      localStorage.setItem('watchlist',JSON.stringify(watchlist) );
      localStorage.setItem('watchlist_hash',JSON.stringify(watchlist_hash) ); // keep hash in sync
      this.button_text = 'Add to Watchlist'
      this.alert_type = 'danger';
      wl_action = 'Removed from'

    }


    this._success.next(`${wl_action} watchlist`);

     }
}
