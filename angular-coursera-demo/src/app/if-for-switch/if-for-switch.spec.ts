import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForSwitch } from './if-for-switch';

describe('IfForSwitch', () => {
  let component: IfForSwitch;
  let fixture: ComponentFixture<IfForSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfForSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfForSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
