import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFacilities } from './show-facilities';

describe('ShowFacilities', () => {
  let component: ShowFacilities;
  let fixture: ComponentFixture<ShowFacilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFacilities],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFacilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
