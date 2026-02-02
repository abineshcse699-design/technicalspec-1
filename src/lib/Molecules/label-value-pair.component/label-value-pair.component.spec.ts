import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValuePairComponent } from './label-value-pair.component';

describe('LabelValuePairComponent', () => {
  let component: LabelValuePairComponent;
  let fixture: ComponentFixture<LabelValuePairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelValuePairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelValuePairComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
