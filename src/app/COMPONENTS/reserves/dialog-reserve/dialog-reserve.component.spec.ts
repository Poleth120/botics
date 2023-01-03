import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReserveComponent } from './dialog-reserve.component';

describe('DialogReserveComponent', () => {
  let component: DialogReserveComponent;
  let fixture: ComponentFixture<DialogReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
