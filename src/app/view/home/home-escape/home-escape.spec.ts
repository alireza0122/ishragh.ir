import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEscape } from './home-escape';

describe('HomeEscape', () => {
  let component: HomeEscape;
  let fixture: ComponentFixture<HomeEscape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEscape],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEscape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
