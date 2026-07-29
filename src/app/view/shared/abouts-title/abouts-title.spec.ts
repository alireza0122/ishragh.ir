import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsTitle } from './abouts-title';

describe('AboutsTitle', () => {
  let component: AboutsTitle;
  let fixture: ComponentFixture<AboutsTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutsTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutsTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
