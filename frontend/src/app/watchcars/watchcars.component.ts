import { Component, OnInit, Input } from '@angular/core';
import {NgbCarousel,NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommunicatorService } from '../communicator.service';
import { Router } from '@angular/router';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-watchcars',
  templateUrl: './watchcars.component.html',
  styleUrls: ['./watchcars.component.css']
})
export class WatchcarsComponent implements OnInit {

  public pictures;
  public images= new Array();
  public captions= new Array();
  public links = new Array();
  public categories = new Array();
  
  public watchcar_title;

  public mobile ;
  public device ;
  public card_class_device;


@Input() watchcar_name

  constructor(private _communicatorservice : CommunicatorService, private _router : Router, private route: ActivatedRoute, private breakpointObs : BreakpointObserver  )  { }

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

   

    this.route.paramMap.subscribe((params :ParamMap) => {
      let id = params.get('id');
      let category = params.get('category');


      if (this.watchcar_name=='reco')
        this.watchcar_title = 'Recommended '
      else
         this.watchcar_title = 'Similar ' 

      if (category=='movie')
         this.watchcar_title += 'Movies'
      else
          this.watchcar_title += 'TV shows' 

        

    let endpoint =`${this.watchcar_name}/${category}/${id}`

    this. _communicatorservice.hit_backend(endpoint).subscribe(
      data => {


        this.pictures=JSON.stringify(data); 
        this.pictures=JSON.parse(this.pictures);
        
        this.images=[];
        this.captions=[];
        this.links=[];
        this.categories=[];

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
  );}

  onSelect(category,id){
    this._router.navigate(['/watch',category,id]);
  }
}
