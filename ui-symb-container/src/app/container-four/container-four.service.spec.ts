import { TestBed } from '@angular/core/testing';

import { ContainerFourService } from './container-four.service';

describe('ContainerFourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerFourService = TestBed.get(ContainerFourService);
    expect(service).toBeTruthy();
  });
});
