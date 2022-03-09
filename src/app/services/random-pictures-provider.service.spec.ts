import { TestBed } from '@angular/core/testing';

import { RandomPicturesProviderService } from './random-pictures-provider.service';

describe('RandomPicturesProviderService', () => {
  let service: RandomPicturesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPicturesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
