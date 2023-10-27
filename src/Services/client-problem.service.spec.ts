import { TestBed } from '@angular/core/testing';

import { ClientProblemService } from './client-problem.service';

describe('ClientProblemService', () => {
  let service: ClientProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
