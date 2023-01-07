import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSendComponent } from './comments-send.component';

describe('CommentsSendComponent', () => {
  let component: CommentsSendComponent;
  let fixture: ComponentFixture<CommentsSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
