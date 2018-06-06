import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import {CarTrackersComponent} from './car-trackers/car-trackers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CarTrackerService} from '../services/car-tracker.service';

import {RestangularModule} from 'ngx-restangular';
import {AgmCoreModule} from '@agm/core';
import {NewCarTrackerDialogComponent} from './new-car-tracker-dialog/new-car-tracker-dialog.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {RouteDialogComponent} from './route-dialog/route-dialog.component';
import {FormsModule} from '@angular/forms';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/rest');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    CarTrackersComponent,
    NewCarTrackerDialogComponent,
    ConfirmDialogComponent,
    RouteDialogComponent
  ],
  entryComponents: [NewCarTrackerDialogComponent, ConfirmDialogComponent, RouteDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
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
