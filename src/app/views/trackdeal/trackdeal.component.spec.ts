import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdealComponent } from './trackdeal.component';

describe('TrackdealComponent', () => {
  let component: TrackdealComponent;
  let fixture: ComponentFixture<TrackdealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackdealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
