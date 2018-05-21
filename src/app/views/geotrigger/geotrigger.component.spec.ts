import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeotriggerComponent } from './geotrigger.component';

describe('GeotriggerComponent', () => {
  let component: GeotriggerComponent;
  let fixture: ComponentFixture<GeotriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeotriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeotriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
