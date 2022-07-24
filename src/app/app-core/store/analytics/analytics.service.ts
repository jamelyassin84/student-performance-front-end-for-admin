import { BaseService } from './../../../../@global_packages/api/base.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AnalyticsService extends BaseService<any> {
    constructor(_http: HttpClient) {
        super(_http, 'analytics');
    }
}
