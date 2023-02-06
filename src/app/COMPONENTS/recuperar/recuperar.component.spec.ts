import { ComponentFixture, TestBed,  } from '@angular/core/testing';

import { RecuperarComponent } from './recuperar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, FormsModule],
      declarations: [  RecuperarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should have all password ', () => {
    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.recuperarD).toEqual(undefined);
  });

  it('Cambiar/restablecer contraseña', () => {
    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.recuperarD).toEqual(undefined);
  });

});
