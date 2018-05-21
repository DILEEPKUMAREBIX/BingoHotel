import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersblockedComponent } from './usersblocked.component';

describe('UsersblockedComponent', () => {
  let component: UsersblockedComponent;
  let fixture: ComponentFixture<UsersblockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersblockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersblockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
