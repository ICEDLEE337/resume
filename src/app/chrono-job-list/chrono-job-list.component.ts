import { Component, OnInit, Input } from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';

@Component({
  selector: 'app-chrono-job-list',
  templateUrl: './chrono-job-list.component.html',
  styleUrls: ['./chrono-job-list.component.scss']
})
export class ChronoJobListComponent implements OnInit {
  @Input() engagements: IEngagement[];

  constructor() { }

  ngOnInit() {
  }

}
