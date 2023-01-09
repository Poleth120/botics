import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesUserComponent } from './reserves-user.component';

describe('ReservesUserComponent', () => {
  let component: ReservesUserComponent;
  let fixture: ComponentFixture<ReservesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservesUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
