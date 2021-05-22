import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommunicatorService } from '../communicator.service';


@Component({
  selector: 'app-castmodal',
  templateUrl: './castmodal.component.html',
  styleUrls: ['./castmodal.component.css']
})
export class CastmodalComponent implements OnInit {

  public actor_id;
  public actor_details ={};
  public actor_image ="";
  public data_received = false;

  

  constructor( public modal : NgbActiveModal, private _communicatorservice : CommunicatorService) {}

  ngOnInit(): void {

  

    this. _communicatorservice.hit_backend(`actor-details/${this.actor_id}`).subscribe(
      data => {

        // console.log(data);
        this.actor_details = data;
        this.data_received = true;
      }
    );
  }

}
