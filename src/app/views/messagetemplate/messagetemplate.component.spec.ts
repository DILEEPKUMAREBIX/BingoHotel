import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagetemplateComponent } from './messagetemplate.component';

describe('MessagetemplateComponent', () => {
  let component: MessagetemplateComponent;
  let fixture: ComponentFixture<MessagetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
