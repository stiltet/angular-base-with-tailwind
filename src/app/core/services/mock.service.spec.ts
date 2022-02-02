import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BackendService } from './mock.service';

describe('MockService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
