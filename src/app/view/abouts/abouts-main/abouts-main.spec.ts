import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsMain } from './abouts-main';

describe('AboutsMain', () => {
  let component: AboutsMain;
  let fixture: ComponentFixture<AboutsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutsMain],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
