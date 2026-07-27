import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBanner } from './submit-banner';

describe('SubmitBanner', () => {
  let component: SubmitBanner;
  let fixture: ComponentFixture<SubmitBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
