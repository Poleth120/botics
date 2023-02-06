import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReservesComponent } from './reserves.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservesComponent', () => {
  let component: ReservesComponent;
  let fixture: ComponentFixture<ReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule, MatCardModule, MatPaginatorModule, FormsModule, MatTableModule, BrowserAnimationsModule],
      declarations: [ ReservesComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Should have all reserves', () => {
    fixture = TestBed.createComponent(ReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.reservesD).toEqual(undefined);
  });

  it('Crear reserva', () => {
    fixture = TestBed.createComponent(ReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.reservesD).toEqual(undefined);
  });


});
