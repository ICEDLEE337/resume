import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChronoJobListComponent} from './chrono-job-list.component';
import {IEngagement} from 'src/types/IEngagement';
import {Assertions} from 'src/test-helpers/Assertions';
import {asElementData} from '@angular/core/src/view';
import {EngagementComponent} from '../engagement/engagement.component';
import {MaterialModule} from '../material/material.module';
import {Engagements} from 'src/backend/Engagements';

describe('ChronoJobListComponent', () => {
  let component: ChronoJobListComponent;
  let fixture: ComponentFixture<ChronoJobListComponent>;
  let sampleEngagements: IEngagement[];
  let assertions: Assertions<ChronoJobListComponent, IEngagement>;
  let engagementsDb: Engagements;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ChronoJobListComponent, EngagementComponent],
      providers: [Engagements]
    })
      .compileComponents();
  }));

  describe('GIVEN: a list of IEngagements are defined on the component', () => {

    beforeEach(() => {
      engagementsDb = TestBed.get(Engagements);
      sampleEngagements = Engagements.getEngagements();
      fixture = TestBed.createComponent(ChronoJobListComponent);
      component = fixture.componentInstance;
      component.engagements = sampleEngagements;
      fixture.detectChanges();
      assertions = new Assertions(fixture, expect);
    });

    it('should render one EngagementComponent per IEngagement', () => {
      const childComponentSelector = 'app-engagement';
      assertions.verifyComponentInvocationForAll(sampleEngagements, childComponentSelector)
    });
  });
});
