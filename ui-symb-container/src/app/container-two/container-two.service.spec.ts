import { TestBed } from '@angular/core/testing';

import { ContainerTwoService } from './container-two.service';

describe('ContainerTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerTwoService = TestBed.get(ContainerTwoService);
    expect(service).toBeTruthy();
  });
});
