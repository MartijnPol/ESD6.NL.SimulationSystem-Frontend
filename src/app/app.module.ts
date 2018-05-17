import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import {CarTrackersComponent} from './car-trackers/car-trackers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {CarTrackerService} from '../services/car-tracker.service';

import {RestangularModule} from 'ngx-restangular';
import {AgmCoreModule} from '@agm/core';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://simulationsystem-backend.herokuapp.com/rest');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    CarTrackersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBECZDHHuxDsGezIfvZG2vEtAdLBz1B10I'
    }),
  ],
  providers: [CarTrackerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
