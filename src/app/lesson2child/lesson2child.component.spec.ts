import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2childComponent } from './lesson2child.component';

describe('Lesson2childComponent', () => {
  let component: Lesson2childComponent;
  let fixture: ComponentFixture<Lesson2childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson2childComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
