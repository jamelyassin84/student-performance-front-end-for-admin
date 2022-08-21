import { Injectable } from '@angular/core';
import svm from 'svm';

@Injectable({ providedIn: 'root' })
export class SVMService {
    svm: any;
    constructor() {
        this.svm = new svm.SVM();
    }
}
