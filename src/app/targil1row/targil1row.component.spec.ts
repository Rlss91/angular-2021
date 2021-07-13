import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Targil1rowComponent } from './targil1row.component';

describe('Targil1rowComponent', () => {
  let component: Targil1rowComponent;
  let fixture: ComponentFixture<Targil1rowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Targil1rowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Targil1rowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
