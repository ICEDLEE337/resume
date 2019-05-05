import {Component, OnInit} from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';
import {Engagements} from 'src/backend/Engagements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private engagementDb: Engagements){}
  ngOnInit (): void {
    this.engagements = Engagements.getEngagements();
  }
  title = 'resume';
  engagements: IEngagement[];

}
