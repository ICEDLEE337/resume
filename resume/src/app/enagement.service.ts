import { Injectable } from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  getClientImage (sampleEngagement: IEngagement): any {
    return sampleEngagement.client.image;
  }
  getClientAddress (sampleEngagement: IEngagement): any {
    return `${sampleEngagement.client.city}, ${sampleEngagement.client.state} ${sampleEngagement.client.zip}`;
  }

  constructor() { }
}
