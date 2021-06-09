import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterDetailComponentComponent } from './super-counter-detail-component.component';

describe('SuperCounterDetailComponentComponent', () => {
  let component: SuperCounterDetailComponentComponent;
  let fixture: ComponentFixture<SuperCounterDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCounterDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
