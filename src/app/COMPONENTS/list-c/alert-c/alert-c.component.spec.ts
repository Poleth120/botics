import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCCComponent } from './alert-c.component';

describe('AlertCCComponent', () => {
  let component: AlertCCComponent;
  let fixture: ComponentFixture<AlertCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
