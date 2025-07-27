import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVerificationComponent } from './page-verification.component';

describe('PageVerificationComponent', () => {
  let component: PageVerificationComponent;
  let fixture: ComponentFixture<PageVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
