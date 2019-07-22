import {Component, OnInit, Input} from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';
import {EngagementService} from './enagement.service';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss']
})
export class EngagementComponent implements OnInit {
  @Input() engagement: IEngagement;

  constructor (private engagementSvc: EngagementService) {}

  ngOnInit () {
  }

  getClientAddress (engagement: IEngagement): string {
    return this.engagementSvc.getClientAddress(engagement);
  }

}
