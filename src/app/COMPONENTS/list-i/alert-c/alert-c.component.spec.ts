import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCComponent } from './alert-c.component';

describe('AlertCComponent', () => {
  let component: AlertCComponent;
  let fixture: ComponentFixture<AlertCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
