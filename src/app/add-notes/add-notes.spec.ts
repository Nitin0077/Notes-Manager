import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotes } from './add-notes';

describe('AddNotes', () => {
  let component: AddNotes;
  let fixture: ComponentFixture<AddNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
