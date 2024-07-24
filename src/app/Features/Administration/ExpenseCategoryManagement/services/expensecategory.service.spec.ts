import { TestBed } from '@angular/core/testing';

import { ExpensecategoryService } from './expensecategory.service';

describe('ExpensecategoryService', () => {
  let service: ExpensecategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
