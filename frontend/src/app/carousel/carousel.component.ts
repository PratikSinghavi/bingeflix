import { Component, OnInit , ViewChild, DoCheck } from '@angular/core';
import {NgbCarousel,NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommunicatorService } from '../communicator.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import {BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  public pictures;
  public images= new Array();
  public captions= new Array();
  public links= new Array();

  public device="";
  public cont_padding_class="cont-padding-normal";
  public img_cont_class="img-cont-normal";
  public mobile;

  constructor(private _communicatorservice : CommunicatorService, private _router : Router,private breakpointObs : BreakpointObserver ){
    
  }
  
  ngOnInit(){

    this.breakpointObs.observe('(max-width:768px)').subscribe( data => {

      if (data.matches){
        // console.log('Something changed');
        this.device= 'mobile';
        this.mobile=true;
        this.cont_padding_class = "cont-padding-"+this.device;
        this.img_cont_class =  "img-cont-"+this.device;
      }
      else{
        this.mobile=false;
        this.device= 'normal';
        this.cont_padding_class = "cont-padding-"+this.device;
        this.img_cont_class = "img-cont-"+this.device;
      }

    });

   this. _communicatorservice.hit_backend('now-playing').subscribe(
      data => {
        this.pictures=JSON.stringify(data); 
        this.pictures=JSON.parse(this.pictures);
      
        

        for (let i = 0; i < Object.keys(this.pictures).length; i++) {
          // console.log(this.pictures[String(i)]);
          this.images.push(this.pictures[String(i)]['image']) ;
          this.captions.push(this.pictures[String(i)]['name']) ;
          this.links.push(this.pictures[String(i)]['id']) ;
          
        }

        // console.log(this.pictures);
      }
    );

    
    

  }

  // images = ['pcDc2WJAYGJTTvRSEIpRZwM3Ola','hJuDvwzS0SPlsE6MNFOpznQltDZ','srYya1ZlI97Au4jUYAktDe3avyA'].map((n) => `https://image.tmdb.org/t/p/original/${n}.jpg`);
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  // ngDoCheck(){
  //   console.log('something changed');
  //   // console.log(this.paused);
  // }

  onSelect(id){
    this._router.navigate(['/watch','movie',id]);
  }

}
