import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TicketsSendComponent } from './tickets-send.component';
import {  HttpClientModule } from '@angular/common/http';
describe('TicketsSendComponent', () => {
  let component: TicketsSendComponent;
  let fixture: ComponentFixture<TicketsSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, MatDialogModule],
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




  it('Should have all tickets ', () => {
    fixture = TestBed.createComponent(TicketsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.ticketsD).toEqual(undefined);
  });


  it('Formulario de solicitud de tickets de asistencia', () => {
    fixture = TestBed.createComponent(TicketsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.ticketspD).toEqual(undefined);
  });

  it('Solicitar tickets de asistencia rol docente', () => {
    fixture = TestBed.createComponent(TicketsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.ticketspD).toEqual(undefined);
  });



});
