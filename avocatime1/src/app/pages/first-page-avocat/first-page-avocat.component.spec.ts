import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMotPasseComponent } from './nv-mot-passe.component';

describe('NvMotPasseComponent', () => {
  let component: NvMotPasseComponent;
  let fixture: ComponentFixture<NvMotPasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvMotPasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvMotPasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
