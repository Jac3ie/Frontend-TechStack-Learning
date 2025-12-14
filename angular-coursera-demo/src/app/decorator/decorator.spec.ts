import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decorator } from './decorator';

describe('Decorator', () => {
  let component: Decorator;
  let fixture: ComponentFixture<Decorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decorator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
