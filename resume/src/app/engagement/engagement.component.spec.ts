import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EngagementComponent} from './engagement.component';
import {By} from '@angular/platform-browser';
import {IEngagement} from 'src/types/IEngagement';
import {MaterialModule} from '../material/material.module';
import {EngagementService} from '../enagement.service';
import {Assertions} from 'src/test-helpers/Assertions';
import {Engagements} from 'src/backend/Engagements';
describe('EngagementComponent', () => {
  let component: EngagementComponent;
  let fixture: ComponentFixture<EngagementComponent>;
  let sampleEngagement: IEngagement;
  let engagementSvc: EngagementService;
  let assertions: Assertions<EngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementComponent],
      imports: [MaterialModule],
      providers: [EngagementService, Engagements]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    sampleEngagement = Engagements.getEngagements()[0];
    engagementSvc = TestBed.get(EngagementService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementComponent);
    component = fixture.componentInstance;
    component.engagement = sampleEngagement;
    console.warn(sampleEngagement);
    fixture.detectChanges();
    assertions = new Assertions(fixture, expect);
  });

  describe('GIVEN: an IEngagement is defined on the component', () => {

    it('should contain the client name', () => {
      assertions.verifyInnerText({
        selector: '.client-name',
        content: sampleEngagement.client.name
      });
    });

    it('should contain the client address', () => {
      assertions.verifyInnerText({
        selector: '.client-address',
        content: engagementSvc.getClientAddress(sampleEngagement)
      });
    });

    it('should contain the client image', () => {
      const content = engagementSvc.getClientImage(sampleEngagement)
      assertions.verifyOuterHtml({
        selector: '.client-image',
        content
      });
    });

  });

});

