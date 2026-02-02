import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterListItemComponent } from './chapter-list-item.component';

describe('ChapterListItemComponent', () => {
  let component: ChapterListItemComponent;
  let fixture: ComponentFixture<ChapterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterListItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
