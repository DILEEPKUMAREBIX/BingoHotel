import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersegmentsComponent } from './usersegments.component';

describe('UsersegmentsComponent', () => {
  let component: UsersegmentsComponent;
  let fixture: ComponentFixture<UsersegmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersegmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
