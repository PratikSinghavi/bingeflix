import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../communicator.service';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews;

  public mobile = false ;
  public device = 'normal' ;
  public card_class_device;

  constructor(private route: ActivatedRoute, private _communicatorservice : CommunicatorService,  private breakpointObs : BreakpointObserver) { }

  ngOnInit(): void {


    this.breakpointObs.observe('(max-width:768px)').subscribe( data => {

      if (data.matches){
        // console.log('Something changed');
        this.mobile= true;
        this.device= 'mobile';
         // this.card_class_device = "card-class-"+this.device;
      }
      else{
        this.mobile= false;
        this.device= 'normal';
        // this.card_class_device = "card-class-"+this.device;
      }

    });
    
    // let id = this.route.snapshot.paramMap.get('id');
    // let category = this.route.snapshot.paramMap.get('category');

    this.route.paramMap.subscribe((params :ParamMap) => {
      let id = params.get('id');
      let category = params.get('category');

    this. _communicatorservice.hit_backend(`reviews/${category}/${id}`).subscribe(
      data => {

        // console.log(data);
        this.reviews = data;
        
      }
    );
  }
  );}

}
