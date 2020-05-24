import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstbarComponent } from './firstbar.component';

describe('FirstbarComponent', () => {
  let component: FirstbarComponent;
  let fixture: ComponentFixture<FirstbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
