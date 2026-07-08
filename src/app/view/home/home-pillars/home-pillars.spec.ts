import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePillars } from './home-pillars';

describe('HomePillars', () => {
  let component: HomePillars;
  let fixture: ComponentFixture<HomePillars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePillars],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePillars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
