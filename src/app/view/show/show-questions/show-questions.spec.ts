import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuestions } from './show-questions';

describe('ShowQuestions', () => {
  let component: ShowQuestions;
  let fixture: ComponentFixture<ShowQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowQuestions],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowQuestions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
