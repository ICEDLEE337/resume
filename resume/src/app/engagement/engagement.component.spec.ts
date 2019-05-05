import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EngagementComponent} from './engagement.component';
import {By} from '@angular/platform-browser';
import {IEngagement} from 'src/types/IEngagement';
import {Mocks} from 'src/test-helpers/Mocks';
import {MaterialModule} from '../material/material.module';
import {EngagementService} from '../enagement.service';
describe('EngagementComponent', () => {
  let component: EngagementComponent;
  let fixture: ComponentFixture<EngagementComponent>;
  let sampleEngagement: IEngagement;
  let engagementSvc: EngagementService;

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
  });

  describe('GIVEN: an IEngagement is defined on the component', () => {

    it('should contain the client name', () => {
      verifyInnerText({
        selector: '.client-name',
        content: sampleEngagement.client.name
      });
    });

    it('should contain the client address', () => {
      verifyInnerText({
        selector: '.client-address',
        content: engagementSvc.getClientAddress(sampleEngagement)
      });
    });

    it('should contain the client image', () => {
      const content = engagementSvc.getClientImage(sampleEngagement)
      verifyOuterHtml({
        selector: '.client-image',
        content
      });
    });
  });

  function verifyHtml ({selector, property, content}): void {
    expect(fixture.debugElement.query(By.css(selector)).nativeElement[property])
      .toContain(content);
  }

  function verifyInnerHtml ({selector, content}): void {
    const property = 'innerHTML';
    verifyHtml({selector, property, content});
  }

  function verifyOuterHtml ({selector, content}): void {
    const property = 'outerHTML';
    verifyHtml({selector, property, content});
  }

  function verifyInnerText ({selector, content}): void {
    const property = 'innerText';
    verifyHtml({selector, property, content});
  }
});

