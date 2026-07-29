import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMain } from './show-main';

describe('ShowMain', () => {
  let component: ShowMain;
  let fixture: ComponentFixture<ShowMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMain],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
