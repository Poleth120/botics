import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsUserComponent } from './tickets-user.component';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';



describe('TicketsUserComponent', () => {
  let component: TicketsUserComponent;
  let fixture: ComponentFixture<TicketsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatTableModule, MatDialogModule,   MatPaginatorModule,  MatSortModule, MatCardModule, BrowserAnimationsModule ],
      declarations: [ TicketsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should have all tickets ', () => {
    fixture = TestBed.createComponent(TicketsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.ticketsD).toEqual(undefined);
  });

  it('Solicitar ticket--profesor', () => {
    fixture = TestBed.createComponent(TicketsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.ticketsD).toEqual(undefined);
  });
});
