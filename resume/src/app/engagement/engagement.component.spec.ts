import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EngagementComponent} from './engagement.component';
import {By} from '@angular/platform-browser';
import {IEngagement} from 'src/types/IEngagement';
import {Mocks} from 'src/test-helpers/Mocks';
import {MaterialModule} from '../material/material.module';

describe('EngagementComponent', () => {
  let component: EngagementComponent;
  let fixture: ComponentFixture<EngagementComponent>;
  let sampleEngagement: IEngagement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    sampleEngagement = Mocks.getSampleEngagement();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementComponent);
    component = fixture.componentInstance;
    component.engagement = sampleEngagement;
    fixture.detectChanges();
  });

  describe('GIVEN: an IEngagement is defined on the component', () => {
    it('should contain the client name', () => {
      expect(fixture.debugElement.query(By.css('.client-name')).nativeElement.innerText)
        .toBeTruthy();
    });
  });
});
