import { TestBed } from '@angular/core/testing';

import { ContainerThreeService } from './container-three.service';

describe('ContainerThreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerThreeService = TestBed.get(ContainerThreeService);
    expect(service).toBeTruthy();
  });
});
