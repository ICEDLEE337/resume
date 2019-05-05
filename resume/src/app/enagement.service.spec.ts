import {TestBed} from '@angular/core/testing';
import {Engagements} from '../backend/Engagements';
import {EngagementService} from './enagement.service';
import {IEngagement} from 'src/types/IEngagement';
import {Mocks} from '../test-helpers/Mocks';

describe('EngagementService', () => {
  let service: EngagementService;
  let sampleEngagement: IEngagement;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => service = TestBed.get(EngagementService));

  describe('GIVEN: and IEngagement is provided as a parameter', () => {
    beforeEach(() => {
      sampleEngagement = Mocks.getSampleEngagement();
    });
    it('should format an IEngagement address as a single line', () => {
      const expectedResult = 'Mount Pleasant, PA 15666';
      const actualResult = service.getClientAddress(sampleEngagement);
      expect(actualResult)
        .toEqual(expectedResult);
    });
  });
});
