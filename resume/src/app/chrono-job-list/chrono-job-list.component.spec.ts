import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChronoJobListComponent} from './chrono-job-list.component';
import {Mocks} from 'src/test-helpers/Mocks';
import {IEngagement} from 'src/types/IEngagement';
import {Assertions} from 'src/test-helpers/Assertions';
import {asElementData} from '@angular/core/src/view';

describe('ChronoJobListComponent', () => {
  let component: ChronoJobListComponent;
  let fixture: ComponentFixture<ChronoJobListComponent>;
  let sampleEngagements: IEngagement[];
  let assertions: Assertions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChronoJobListComponent]
    })
      .compileComponents();
  }));

  describe('GIVEN: a list of IEngagements are defined on the component', () => {

    beforeEach(() => {
      sampleEngagements = Mocks.getSampleEngagements();
      fixture = TestBed.createComponent(ChronoJobListComponent);
      component = fixture.componentInstance;
      component.engagements = sampleEngagements;
      assertions = new Assertions(fixture);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render one EngagementComponent per IEngagement', () => {
      sampleEngagements.forEach(eng => {
        assertions.verifyOuterHtml({selector: '.engagement', content: '<app-engagement'});
      });
    });
  });
});
