import { Component, OnInit, Input } from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';

@Component({
  selector: 'app-enagagement',
  templateUrl: './enagagement.component.html',
  styleUrls: ['./enagagement.component.scss']
})
export class EnagagementComponent implements OnInit {
  @Input() engagement: IEngagement;

  constructor() { }

  ngOnInit() {

  }

}
