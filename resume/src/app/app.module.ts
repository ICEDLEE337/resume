import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EngagementComponent } from './engagement/engagement.component';

import { MaterialModule } from './material/material.module';
import {EnagementService} from './enagement.service';

@NgModule({
  declarations: [
    AppComponent,
    EngagementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    EnagementService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EngagementComponent
  ]
})
export class AppModule { }
