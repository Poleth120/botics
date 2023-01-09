import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsSendComponent } from './tickets-send.component';

describe('TicketsSendComponent', () => {
  let component: TicketsSendComponent;
  let fixture: ComponentFixture<TicketsSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
