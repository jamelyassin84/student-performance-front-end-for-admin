import { Injectable } from '@angular/core';
import { GuidanceRequestService } from 'app/modules/admin/guidance-request/guidance-request.service';
import svm from 'svm';

@Injectable({ providedIn: 'root' })
export class SVMService {
    constructor(private _guidanceRequestService: GuidanceRequestService) {}
}
