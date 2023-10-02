import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiMagazzinoComponent } from './prodotti-magazzino.component';

describe('ProdottiMagazzinoComponent', () => {
  let component: ProdottiMagazzinoComponent;
  let fixture: ComponentFixture<ProdottiMagazzinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiMagazzinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
