import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsBanner } from './abouts-banner';

describe('AboutsBanner', () => {
  let component: AboutsBanner;
  let fixture: ComponentFixture<AboutsBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutsBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutsBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
