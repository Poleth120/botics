import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLComponent } from './list-l.component';

describe('ListLComponent', () => {
  let component: ListLComponent;
  let fixture: ComponentFixture<ListLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
