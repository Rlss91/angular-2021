import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Targil1Component } from './targil1.component';

describe('Targil1Component', () => {
  let component: Targil1Component;
  let fixture: ComponentFixture<Targil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Targil1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Targil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
