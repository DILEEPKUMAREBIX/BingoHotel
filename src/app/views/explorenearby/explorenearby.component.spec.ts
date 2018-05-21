import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorenearbyComponent } from './explorenearby.component';

describe('ExplorenearbyComponent', () => {
  let component: ExplorenearbyComponent;
  let fixture: ComponentFixture<ExplorenearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorenearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorenearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
