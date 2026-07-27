import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPublished } from './show-published';

describe('ShowPublished', () => {
  let component: ShowPublished;
  let fixture: ComponentFixture<ShowPublished>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPublished],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPublished);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
