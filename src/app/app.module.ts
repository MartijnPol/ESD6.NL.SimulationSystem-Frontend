import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import {CarTrackersComponent} from './car-trackers/car-trackers.component';
import {CarTrackerService} from "../services/car-tracker.service";
import {AngularFirestore} from "angularfire2/firestore";

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
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
  ],
  providers: [CarTrackerService, AngularFirestore],
  bootstrap: [AppComponent]
})

export class AppModule {
}
