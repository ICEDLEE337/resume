import { Injectable } from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {
  getClientAddress (sampleEngagement: IEngagement): any {
    return `${sampleEngagement.client.city}, ${sampleEngagement.client.state} ${sampleEngagement.client.zip}`;
  }

  constructor() { }
}
