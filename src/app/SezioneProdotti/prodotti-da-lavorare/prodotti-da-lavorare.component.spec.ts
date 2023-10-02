import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiDaLavorareComponent } from './prodotti-da-lavorare.component';

describe('ProdottiDaLavorareComponent', () => {
  let component: ProdottiDaLavorareComponent;
  let fixture: ComponentFixture<ProdottiDaLavorareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiDaLavorareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiDaLavorareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
