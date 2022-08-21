import { Pipe, PipeTransform } from '@angular/core';
import regression from 'regression';
import { map, take, Observable } from 'rxjs';
import { RegressionService } from '../services/regression.service';

@Pipe({ name: 'predict' })
export class PredictPipe implements PipeTransform {
    constructor(private _regressionService: RegressionService) {}

    transform(value: number): Observable<number> {
        return predict(value, this._regressionService.regression$);
    }
}

export function predict(
    value: number,
    regression$: Observable<[number, number][]>
): Observable<number> {
    return regression$.pipe(
        take(1),
        map((values) => {
            const result = regression.linear(values);

            const prediction = result.predict(value);

            return Number.isNaN(prediction[1]) ? 0 : prediction[1];
        })
    );
}
