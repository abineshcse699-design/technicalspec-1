import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledValueComponent } from './labeled-value.component';

describe('LabeledValueComponent', () => {
  let component: LabeledValueComponent;
  let fixture: ComponentFixture<LabeledValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeledValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabeledValueComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
