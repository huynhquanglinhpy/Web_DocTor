import { TestBed } from '@angular/core/testing';

import { ModalDetailAppointmentService } from './modal-detail-appointment.service';

describe('ModalDetailAppointmentService', () => {
  let service: ModalDetailAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDetailAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
