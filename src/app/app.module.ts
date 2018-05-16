import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import {CarTrackersComponent} from './car-trackers/car-trackers.component';
import {CarTrackerService} from "../services/car-tracker.service";

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://opendata.cbs.nl/ODataApi/odata');
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
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
  ],
  providers: [CarTrackerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
