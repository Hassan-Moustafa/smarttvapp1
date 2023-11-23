import { TestBed } from '@angular/core/testing';

import { MoviesApisService } from './movies-apis.service';

describe('MoviesApisService', () => {
  let service: MoviesApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
