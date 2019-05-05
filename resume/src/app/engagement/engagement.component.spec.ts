import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EngagementComponent} from './engagement.component';
import {By} from '@angular/platform-browser';
import {IEngagement} from 'src/types/IEngagement';
import {Mocks} from 'src/test-helpers/Mocks';
import {MaterialModule} from '../material/material.module';
import {EngagementService} from '../enagement.service';
import {Assertions} from 'src/test-helpers/Assertions';
describe('EngagementComponent', () => {
  let component: EngagementComponent;
  let fixture: ComponentFixture<EngagementComponent>;
  let sampleEngagement: IEngagement;
  let engagementSvc: EngagementService;
  let assertions: Assertions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementComponent],
      imports: [MaterialModule],
      providers: [EngagementService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    sampleEngagement = Mocks.getSampleEngagement();
    engagementSvc = TestBed.get(EngagementService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementComponent);
    component = fixture.componentInstance;
    component.engagement = sampleEngagement;
    fixture.detectChanges();
    assertions = new Assertions(fixture);
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

