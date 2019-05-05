import { Component } from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';
import {Mocks} from 'src/test-helpers/Mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  engagement: IEngagement = Mocks.getSampleEngagement();

}
