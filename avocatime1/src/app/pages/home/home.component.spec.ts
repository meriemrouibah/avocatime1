import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desktop1Component } from './desktop1.component';

describe('Desktop1Component', () => {
  let component: Desktop1Component;
  let fixture: ComponentFixture<Desktop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desktop1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desktop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
