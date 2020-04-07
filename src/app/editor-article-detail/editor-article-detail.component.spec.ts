import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorArticleDetailComponent } from './editor-article-detail.component';

describe('EditorArticleDetailComponent', () => {
  let component: EditorArticleDetailComponent;
  let fixture: ComponentFixture<EditorArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorArticleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
