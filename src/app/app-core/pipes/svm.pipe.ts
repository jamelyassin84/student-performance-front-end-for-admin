import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import svm from 'svm';
import { RegressionService } from '../services/regression.service';

@Pipe({ name: 'svm_predict' })
export class SVMPredictPipe implements PipeTransform {
    constructor(private _regressionService: RegressionService) {}

    transform(value: number): Observable<number> {
        return svm_predict(value, this._regressionService.regression$);
    }
}

export function svm_predict(
    value: number,
    regression$: Observable<[number, number][]>
): Observable<number> {
    return regression$.pipe(
        take(1),
        map((values) => {
            var SVM = new svm.SVM();

            SVM.train(
                values.map((value) => value[1]),
                values,
                { C: 1 }
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
