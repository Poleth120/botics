import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTicketComponent } from './dialog-ticket.component';

describe('DialogTicketComponent', () => {
  let component: DialogTicketComponent;
  let fixture: ComponentFixture<DialogTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
