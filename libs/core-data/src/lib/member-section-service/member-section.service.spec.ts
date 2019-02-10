import { TestBed } from '@angular/core/testing';

import { MemberSectionService } from './member-section.service';

describe('MemberSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberSectionService = TestBed.get(MemberSectionService);
    expect(service).toBeTruthy();
  });
});
