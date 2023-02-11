import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSendComponent } from './comments-send.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('CommentsSendComponent', () => {
  let component: CommentsSendComponent;
  let fixture: ComponentFixture<CommentsSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule ],
      declarations: [ CommentsSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have all comments ', () => {
    fixture = TestBed.createComponent(CommentsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.commentsD).toEqual(undefined);
  });


  it('formulario para enviar comentarios y/o sugerencias ', () => {
    fixture = TestBed.createComponent(CommentsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.commentsD).toEqual(undefined);
  });


});
