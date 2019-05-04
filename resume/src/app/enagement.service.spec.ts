import {TestBed} from '@angular/core/testing';
import {Engagements} from '../backend/Engagements';
import {EnagementService} from './enagement.service';
import {IEngagement} from 'src/types/IEngagement';

fdescribe('EnagementService', () => {
  let service: EnagementService;
  let sampleEngagement: IEngagement;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => service = TestBed.get(EnagementService));

  describe('GIVEN: and IEngagement is provided as a parameter', () => {
    beforeEach(() => {
      sampleEngagement = Engagements.getEngagements()[0];
    });
    it('should format an IEngagement address as a single line', () => {
      const expectedResult = 'Mount Pleasant, PA 15666';
      const actualResult = expect(service.getClientAddress(sampleEngagement))
      .toEqual(expectedResult);
    });
  });
});
