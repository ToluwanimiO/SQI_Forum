import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcontentComponent } from './postcontent.component';

describe('PostcontentComponent', () => {
  let component: PostcontentComponent;
  let fixture: ComponentFixture<PostcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
