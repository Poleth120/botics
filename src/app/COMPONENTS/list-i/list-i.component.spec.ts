import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIComponent } from './list-i.component';

describe('ListIComponent', () => {
  let component: ListIComponent;
  let fixture: ComponentFixture<ListIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
