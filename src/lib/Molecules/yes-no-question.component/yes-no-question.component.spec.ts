import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoQuestionComponent } from './yes-no-question.component';

describe('YesNoQuestionComponent', () => {
  let component: YesNoQuestionComponent;
  let fixture: ComponentFixture<YesNoQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesNoQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesNoQuestionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
