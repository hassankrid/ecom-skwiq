import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfooterComponent } from './allfooter.component';

describe('AllfooterComponent', () => {
  let component: AllfooterComponent;
  let fixture: ComponentFixture<AllfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
