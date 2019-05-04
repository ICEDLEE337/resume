import {Component, OnInit, Input} from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss']
})
export class EngagementComponent implements OnInit {
  @Input() engagement: IEngagement;

  constructor () {}

  ngOnInit () {
    console.warn(this.engagement);
  }

}
