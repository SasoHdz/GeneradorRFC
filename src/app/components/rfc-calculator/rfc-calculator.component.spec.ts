import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfcCalculatorComponent } from './rfc-calculator.component';

describe('RfcCalculatorComponent', () => {
  let component: RfcCalculatorComponent;
  let fixture: ComponentFixture<RfcCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfcCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
