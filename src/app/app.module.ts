import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { MapComponent } from './geofence/map/map.component';
import { FormComponent } from './geofence/form/form.component';
import { MapService } from './shared/map.service';
import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { HeaderComponent } from './geofence/header/header.component';
import { FooterComponent } from './geofence/footer/footer.component';
import { AddlocComponent } from './geofence/form/addloc/addloc.component';
import { ViewlocComponent } from './geofence/form/viewloc/viewloc.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    GeofenceComponent,
    MapComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    AddlocComponent,
    ViewlocComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyk8Y9LFXMieqJw_4MRlqLl85eSVbSfqw',
      libraries: ['drawing']
    })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
