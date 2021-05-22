import { Component, OnInit } from '@angular/core';
import {BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isMenuCollapsed = true;

  constructor(private breakpointObs : BreakpointObserver){

  }

  public pictures;
  public images= new Array();
  public captions= new Array();
  public links = new Array();
  public categories = new Array();

  public mobile ;
  public device ;
  public navbar_class_device;

  ngOnInit(){
    this.breakpointObs.observe('(max-width:768px)').subscribe( data => {

      if (data.matches){
        // console.log('Something changed');
        this.mobile= true;
        this.device= 'mobile';
        this.navbar_class_device = "navbar-class-"+this.device;
      }
      else{
        this.mobile= false;
        this.device= 'normal';
        this.navbar_class_device = "navbar-class-"+this.device;
      }

    });
  }
}
