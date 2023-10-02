import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiVendutiComponent } from './prodotti-venduti.component';

describe('ProdottiVendutiComponent', () => {
  let component: ProdottiVendutiComponent;
  let fixture: ComponentFixture<ProdottiVendutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiVendutiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiVendutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
