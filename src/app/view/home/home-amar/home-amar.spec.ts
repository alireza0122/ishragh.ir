import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAmar } from './home-amar';

describe('HomeAmar', () => {
  let component: HomeAmar;
  let fixture: ComponentFixture<HomeAmar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAmar],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAmar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
