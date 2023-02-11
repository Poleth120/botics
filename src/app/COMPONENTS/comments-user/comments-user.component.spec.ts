import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsUserComponent } from './comments-user.component';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
describe('CommentsUserComponent', () => {
  let component: CommentsUserComponent;
  let fixture: ComponentFixture<CommentsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatSortModule, RouterModule],
      declarations: [ CommentsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should have all computers ', () => {
    fixture = TestBed.createComponent(CommentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.commentsuD).toEqual(undefined);
  });


  it('Visualización de respuestas ', () => {
    fixture = TestBed.createComponent(CommentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.commentsuD).toEqual(undefined);
  });


});
