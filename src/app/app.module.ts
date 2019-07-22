import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EngagementComponent } from './engagement/engagement.component';

import { MaterialModule } from './material/material.module';

import { ChronoJobListComponent } from './chrono-job-list/chrono-job-list.component';
import {Engagements} from 'src/backend/Engagements';
import {EngagementService} from './engagement/enagement.service';

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
    EngagementService,
    Engagements
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EngagementComponent
  ]
})
export class AppModule { }
