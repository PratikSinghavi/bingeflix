import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  localData = false;
  which_carousel= ['movie/popular','movie/top_rated','trending/movie','tv/popular','tv/top_rated','trending/tv'].map( x => `car/${x}`);
  cardcar_h1 = ['Popular Movies','Top Rated Movies','Trending Movies','Popular TV Shows','Top Rated TV Shows','Trending TV Shows']

  constructor() { }

  ngOnInit(): void {

    if (localStorage.getItem('visited')!=null && localStorage.getItem('visited').length > 0 )
    {
      this.localData= true;
    }
    // console.log(this.which_carousel);
    
  }

}
