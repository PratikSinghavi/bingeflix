import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommunicatorService } from '../communicator.service';
import {ActivatedRoute,ParamMap} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CastmodalComponent } from '../castmodal/castmodal.component';
import {BreakpointObserver } from '@angular/cdk/layout';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-castcard-car',
  templateUrl: './castcard-car.component.html',
  styleUrls: ['./castcard-car.component.css']
})
export class CastcardCarComponent implements OnInit {

  public cast;

  public mobile ;
  public device ;
  public scrolling_wrapper_device;
  
  openVerticallyCentered(actor_id,actor_image) {
    const ref = this.modalService.open(CastmodalComponent,{ centered: true , scrollable: true, size:'lg'});
    ref.componentInstance.actor_id = actor_id;
    ref.componentInstance.actor_image = actor_image;

  }

  constructor(private route: ActivatedRoute, private _communicatorservice : CommunicatorService, private modalService: NgbModal, private breakpointObs : BreakpointObserver ) { }
  

  ngOnInit(): void {

    this.breakpointObs.observe('(max-width:768px)').subscribe( data => {

      if (data.matches){
        // console.log('Something changed');
        this.mobile= true;
        this.device= 'mobile';
        this.scrolling_wrapper_device = "scrolling-wrapper-"+this.device;
      }
      else{
        this.mobile= false;
        this.device= 'normal';
        this.scrolling_wrapper_device = "scrolling-wrapper-"+this.device;
      }

    }); 
  

    
    // let id = this.route.snapshot.paramMap.get('id');
    // let category = this.route.snapshot.paramMap.get('category');

    this.route.paramMap.subscribe((params :ParamMap) => {
      let id = params.get('id');
      let category = params.get('category');

    this. _communicatorservice.hit_backend(`cast/${category}/${id}`).subscribe(
      data => {

        // console.log(data);
        this.cast = data;
       
      }
    );
  }
    
  );}

}
