import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EngagementComponent } from './engagement/engagement.component';

import { MaterialModule } from './material/material.module';
import {EngagementService} from './enagement.service';
import { ChronoJobListComponent } from './chrono-job-list/chrono-job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EngagementComponent,
    ChronoJobListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    EngagementService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EngagementComponent
  ]
})
export class AppModule { }
