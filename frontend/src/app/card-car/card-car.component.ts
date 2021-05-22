import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {NgbCarousel,NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommunicatorService } from '../communicator.service';
import { Router } from '@angular/router';
import {BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})

export class CardCarComponent {

  public pictures;
  public images= new Array();
  public captions= new Array();
  public links = new Array();
  public categories = new Array();

  public mobile ;
  public device ;
  public card_class_device;
  
  
  @Input() cardcar_name
  

  constructor(private _communicatorservice : CommunicatorService, private _router : Router, private breakpointObs : BreakpointObserver){
    
  }
  
  ngOnInit(){

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
  
   this. _communicatorservice.hit_backend(this.cardcar_name).subscribe(
      data => {


        this.pictures=JSON.stringify(data); 
        this.pictures=JSON.parse(this.pictures);
        

        // var temparray = new Array();
        for (let i = 0; i < Object.keys(this.pictures).length; i++) {
          // console.log(this.pictures[String(i)]);
          this.images.push(this.pictures[String(i)]['image']) ;
          this.captions.push(this.pictures[String(i)]['name']) ;
          this.links.push(this.pictures[String(i)]['id']);
          this.categories.push(this.pictures[String(i)]['category']); 
          
        }

        // this.images = temparray
        
      }
    );

    
    

  }
  paused = true;


  onSelect(category,id){
    this._router.navigate(['/watch',category,id]);
  }

}
