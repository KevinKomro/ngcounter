import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDuperCounterDetailCompnonentComponent } from './super-duper-counter-detail-compnonent.component';

describe('SuperDuperCounterDetailCompnonentComponent', () => {
  let component: SuperDuperCounterDetailCompnonentComponent;
  let fixture: ComponentFixture<SuperDuperCounterDetailCompnonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDuperCounterDetailCompnonentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDuperCounterDetailCompnonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
