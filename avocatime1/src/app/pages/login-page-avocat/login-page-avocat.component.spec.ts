import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageAvocatComponent } from './login-page-avocat.component';

describe('LoginPageAvocatComponent', () => {
  let component: LoginPageAvocatComponent;
  let fixture: ComponentFixture<LoginPageAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageAvocatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
