import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneYearComponent } from './one-year.component';

describe('OneYearComponent', () => {
  let component: OneYearComponent;
  let fixture: ComponentFixture<OneYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
