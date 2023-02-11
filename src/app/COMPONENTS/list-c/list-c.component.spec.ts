import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCComponent } from './list-c.component';

import {  HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

describe('ListCComponent', () => {
  let component: ListCComponent;
  let fixture: ComponentFixture<ListCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule, MatPaginatorModule, HttpClientModule, MatSlideToggleModule, MatTableModule, MatCardModule, MatDialogModule ],
      providers: [{provide: ActivatedRoute,
        useValue: { snapshot: {params: {id: '24fkzrw3487943uf358lovd'}}}}],
      declarations: [ ListCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('Should have all computers ', () => {
    fixture = TestBed.createComponent(ListCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.listcD).toEqual(undefined);
  });


  it('Registro de equipos-inventario', () => {
    fixture = TestBed.createComponent(ListCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.listcD).toEqual(undefined);
  });

});
