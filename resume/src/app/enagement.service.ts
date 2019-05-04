import { Injectable } from '@angular/core';
import {IEngagement} from 'src/types/IEngagement';

@Injectable({
  providedIn: 'root'
})
export class EnagementService {
  getClientAddress (sampleEngagement: IEngagement): any {
    return `${sampleEngagement.client.city}, ${sampleEngagement.client.state} ${sampleEngagement.client.zip}`;
  }

  constructor() { }
}
