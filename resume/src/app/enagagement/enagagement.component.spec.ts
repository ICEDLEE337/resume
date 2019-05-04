import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnagagementComponent } from './enagagement.component';

describe('EnagagementComponent', () => {
  let component: EnagagementComponent;
  let fixture: ComponentFixture<EnagagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnagagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnagagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
