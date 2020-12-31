import { TestBed } from '@angular/core/testing';

import { ContainerOneService } from './container-one.service';

describe('ContainerOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerOneService = TestBed.get(ContainerOneService);
    expect(service).toBeTruthy();
  });
});
