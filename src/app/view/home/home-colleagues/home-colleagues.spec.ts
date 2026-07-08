import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeColleagues } from './home-colleagues';

describe('HomeColleagues', () => {
  let component: HomeColleagues;
  let fixture: ComponentFixture<HomeColleagues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeColleagues],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeColleagues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
