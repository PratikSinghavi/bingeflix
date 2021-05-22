import { Component, OnInit } from '@angular/core';
import {NgbCarousel,NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-cont-watch-car',
  templateUrl: './cont-watch-car.component.html',
  styleUrls: ['./cont-watch-car.component.css']
})
export class ContWatchCarComponent implements OnInit {

  public pictures;
  public images= new Array();
  public captions= new Array();
  public links = new Array();
  public categories = new Array();


  public lessthan6 = true;
  public mobile = false ;
  public device = 'normal' ;
  public card_class_device;
  public poster_base_link = 'https://image.tmdb.org/t/p/original'

  constructor( private _router : Router, private breakpointObs : BreakpointObserver) { }

  ngOnInit(): void {


    this.breakpointObs.observe('(max-width:768px)').subscribe( data => {

      if (data.matches){
        // console.log('Something changed');
        this.mobile= true;
        this.device= 'mobile';
        this.card_class_device = "card-class-"+this.device;
      }
      else{
        this.mobile= false;
        this.device= 'normal';
        this.card_class_device = "card-class-"+this.device;
      }

    });


    
      // creation of cards
      let visited = localStorage.getItem('visited')
      
      if( visited != null && visited.length > 0 ){

        

        this.pictures=(JSON.parse(visited));

        let count = this.pictures.length

        // console.log(this.pictures);
        // console.log(count)

        if (count>6)
          this.lessthan6 = false;

        // var temparray = new Array();
        let sep;
        for (let i = count-1 ; i >= 0  ; i--) {

          sep = this.pictures[i].split("|")

          // console.log(sep[3]);
          this.images.push(sep[2]) ;//this.poster_base_link+ removed 
          this.captions.push(sep[3]) ;
          this.links.push(sep[1]);
          this.categories.push(sep[0]); 
          
        }
    }

        // this.images = temparray
        
        
    
  }

  onSelect(category,id){
    this._router.navigate(['/watch',category,id]);
  }

  

}
