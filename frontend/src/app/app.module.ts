import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MylistComponent } from './mylist/mylist.component';
import { CardCarComponent } from './card-car/card-car.component';
import { CommunicatorService } from './communicator.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchTypeaheadComponent } from './search-typeahead/search-typeahead.component';
import { WatchComponent } from './watch/watch.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { WatchDescComponent } from './watch-desc/watch-desc.component';
import { CastcardCarComponent } from './castcard-car/castcard-car.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CastmodalComponent } from './castmodal/castmodal.component';
import { WatchcarsComponent } from './watchcars/watchcars.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ContWatchCarComponent } from './cont-watch-car/cont-watch-car.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    MylistComponent,
    CardCarComponent,
    SearchTypeaheadComponent,
    WatchComponent,
    WatchDescComponent,
    CastcardCarComponent,
    ReviewsComponent,
    CastmodalComponent,
    WatchcarsComponent,
    ContWatchCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    YouTubePlayerModule ,
    LayoutModule ,
    FormsModule
  ],
  providers: [CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
