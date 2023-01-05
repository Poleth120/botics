import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesSendComponent } from './reserves-send.component';

describe('ReservesSendComponent', () => {
  let component: ReservesSendComponent;
  let fixture: ComponentFixture<ReservesSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
