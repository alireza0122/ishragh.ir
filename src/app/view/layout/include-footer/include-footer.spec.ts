import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeFooter } from './include-footer';

describe('IncludeFooter', () => {
  let component: IncludeFooter;
  let fixture: ComponentFixture<IncludeFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncludeFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(IncludeFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
