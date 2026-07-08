import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeHeaders } from './include-headers';

describe('IncludeHeaders', () => {
  let component: IncludeHeaders;
  let fixture: ComponentFixture<IncludeHeaders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncludeHeaders],
    }).compileComponents();

    fixture = TestBed.createComponent(IncludeHeaders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
