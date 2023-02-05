import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesSendComponent } from './reserves-send.component';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservesSendComponent', () => {
  let component: ReservesSendComponent;
  let fixture: ComponentFixture<ReservesSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule, MatCardModule, MatPaginatorModule, FormsModule, MatTableModule, BrowserAnimationsModule, MatDialogRef],
      declarations: [ ReservesSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservesSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
