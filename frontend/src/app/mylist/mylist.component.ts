import { Component, OnInit } from '@angular/core';
import {NgbCarousel,NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  public pictures;
  public images= new Array();
  public captions= new Array();
  public links = new Array();
  public categories = new Array();


  public lessthan6 = true;
  public mobile = false ;
  public device = 'normal' ;
  public card_class_device;
  public ngbcar_class_device;
  public poster_base_link = 'https://image.tmdb.org/t/p/original'

  constructor( private _router : Router, private breakpointObs : BreakpointObserver) { }

  ngOnInit(): void {


    this.breakpointObs.observe('(max-width:768px)').subscribe( data => {

      if (data.matches){
        // console.log('Something changed');
        this.mobile= true;
        this.device= 'mobile';
        this.card_class_device = "card-class-"+this.device;
        this.ngbcar_class_device = "ngbcar-class-"+this.device;
      }
      else{
        this.mobile= false;
        this.device= 'normal';
        this.card_class_device = "card-class-"+this.device;
        this.ngbcar_class_device = "ngbcar-class-"+this.device;
      }

    });


    
      // creation of cards
      // console.log(localStorage.getItem('count'));
      let watchlist = localStorage.getItem('watchlist');
      if( watchlist != null && watchlist.length > 0 ){

        this.pictures=JSON.parse(localStorage.getItem('watchlist'));
        let count = watchlist.length;

     

        // var temparray = new Array();
        let sep;
        for (let i in this.pictures) {

          if(this.pictures[i] != null){
          sep = this.pictures[i].split("|")

          // console.log(sep[3]);
          this.images.push(sep[2]) ;//this.poster_base_link+ removed 
          this.captions.push(sep[3]) ;
          this.links.push(sep[1]);
          this.categories.push(sep[0]); 
        }
        }
    }

    else{
      this.pictures=[];
    }
        // this.images = temparray
        
        
    
  }

  onSelect(category,id){
    this._router.navigate(['/watch',category,id]);
  }
  

  

}
