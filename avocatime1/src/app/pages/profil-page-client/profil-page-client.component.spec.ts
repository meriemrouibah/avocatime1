import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPageClientComponent } from './profil-page-client.component';

describe('ProfilPageClientComponent', () => {
  let component: ProfilPageClientComponent;
  let fixture: ComponentFixture<ProfilPageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilPageClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
