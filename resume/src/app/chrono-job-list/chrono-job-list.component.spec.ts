import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChronoJobListComponent} from './chrono-job-list.component';
import {Mocks} from 'src/test-helpers/Mocks';

describe('ChronoJobListComponent', () => {
  let component: ChronoJobListComponent;
  let fixture: ComponentFixture<ChronoJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChronoJobListComponent]
    })
      .compileComponents();
  }));

  describe('GIVEN: a list of IEngagements are defined on the component', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(ChronoJobListComponent);
      component = fixture.componentInstance;
      component.engagements = Mocks.getSampleEngagements();
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });


    it('should render one EngagementComponent per IEngagement', () => {

    });
  });
});
