import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsPagePage } from './alarms.page';

describe('AlarmsPagePage', () => {
  let component: AlarmsPagePage;
  let fixture: ComponentFixture<AlarmsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmsPagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
