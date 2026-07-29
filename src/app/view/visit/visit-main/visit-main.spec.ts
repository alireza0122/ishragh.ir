import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitMain } from './visit-main';

describe('VisitMain', () => {
  let component: VisitMain;
  let fixture: ComponentFixture<VisitMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitMain],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
