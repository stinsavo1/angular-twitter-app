import { inject, TestBed } from '@angular/core/testing';

import { TweetsService } from './tweets.service';
import { Apollo } from 'apollo-angular';

describe('TweetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetsService, Apollo]
    });
  });

  it('should be created', inject([TweetsService], (service: TweetsService) => {
    expect(service).toBeTruthy();
  }));
});
