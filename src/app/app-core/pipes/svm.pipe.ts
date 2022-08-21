import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import svm from 'svm';
import { RegressionService } from '../services/regression.service';
import { SVMService } from '../services/svm.service';

@Pipe({ name: 'svm_predict' })
export class SVMPredictPipe implements PipeTransform {
    constructor(
        private _regressionService: RegressionService,
        private _SVMService: SVMService
    ) {}

    transform(value: number): Observable<number> {
        return svm_predict(
            value,
            this._regressionService.regression$,
            this._SVMService.svm
        );
    }
}

export function svm_predict(
    value: number,
    regression$: Observable<[number, number][]>,
    SVM: any
): Observable<number> {
    return regression$.pipe(
        take(1),
        map((values) => {
            SVM.train(
                values,
                values.map((value) => getRandomValue()),
                { C: 2.0 }
            );

            const prediction = SVM.predict(value);

            return Number.isNaN(prediction[0]) ? 0 : prediction[0];
        })
    );
}

function getRandomValue() {
    const labels = [1, -1];

    return Math.floor(Math.random() * labels.length);
}
