import { TestBed } from '@angular/core/testing';

import { ProdottiMagazzinoService } from './prodotti-magazzino.service';

describe('ProdottiMagazzinoService', () => {
  let service: ProdottiMagazzinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiMagazzinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
