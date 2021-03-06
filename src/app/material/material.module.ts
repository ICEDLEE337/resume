import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatCard, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCardAvatar, MatListModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    LayoutModule
  ],
  exports: [
    MatCardModule,
    MatListModule
  ]
})
export class MaterialModule {}
