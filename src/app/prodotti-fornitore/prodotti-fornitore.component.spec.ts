import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiFornitoreComponent } from './prodotti-fornitore.component';

describe('ProdottiFornitoreComponent', () => {
  let component: ProdottiFornitoreComponent;
  let fixture: ComponentFixture<ProdottiFornitoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiFornitoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiFornitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
