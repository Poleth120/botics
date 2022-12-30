import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLabComponent } from './dialog-lab.component';

describe('DialogLabComponent', () => {
  let component: DialogLabComponent;
  let fixture: ComponentFixture<DialogLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
