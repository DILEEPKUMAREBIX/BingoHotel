import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoregionComponent } from './georegion.component';

describe('GeoregionComponent', () => {
  let component: GeoregionComponent;
  let fixture: ComponentFixture<GeoregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
