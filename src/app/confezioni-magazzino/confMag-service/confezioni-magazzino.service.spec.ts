import { TestBed } from '@angular/core/testing';

import { ConfezioniMagazzinoService } from '../../../Services/confezioni-magazzino.service';

describe('ConfezioniMagazzinoService', () => {
  let service: ConfezioniMagazzinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfezioniMagazzinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
