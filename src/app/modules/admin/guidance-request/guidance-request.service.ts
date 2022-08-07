import { BaseService } from './../../../../@global_packages/api/base.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GuidanceRequestService extends BaseService<any> {
    constructor(_http: HttpClient) {
        super(_http, 'guidance-request');
    }

    current$: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(
        null
    );
}
