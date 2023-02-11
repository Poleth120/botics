import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIComponent } from './list-i.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {  HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListIComponent', () => {
  let component: ListIComponent;
  let fixture: ComponentFixture<ListIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatSortModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatSlideToggleModule, HttpClientModule, MatCardModule, FormsModule, BrowserAnimationsModule ],
      declarations: [ ListIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have all intern ', () => {
    fixture = TestBed.createComponent(ListIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.internD).toEqual(undefined);
  });

  it('Gestionar pasantes', () => {
    fixture = TestBed.createComponent(ListIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.internD).toEqual(undefined);
  });
});
