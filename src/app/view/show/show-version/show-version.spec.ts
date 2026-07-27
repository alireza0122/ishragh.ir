import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVersion } from './show-version';

describe('ShowVersion', () => {
  let component: ShowVersion;
  let fixture: ComponentFixture<ShowVersion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowVersion],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowVersion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
