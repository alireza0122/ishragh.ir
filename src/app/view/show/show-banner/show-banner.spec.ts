import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBanner } from './show-banner';

describe('ShowBanner', () => {
  let component: ShowBanner;
  let fixture: ComponentFixture<ShowBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
