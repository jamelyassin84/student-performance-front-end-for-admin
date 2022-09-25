import { take, Observable, map } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { RegressionService } from '../services/regression.service';
import regression from 'regression';

@Pipe({ name: 'to_optimized_regression' })
export class ToOptimizedRegressionPipe implements PipeTransform {
    constructor(private _regressionService: RegressionService) {}

    regression$ = this._regressionService.regression$;

    transform(value: number): Observable<number> {
        return this.to_optimized_regression(value);
    }

    to_optimized_regression(value: number): Observable<number> {
        let results = undefined;

        return this._regressionService.regression$.pipe(
            take(1),
            map((values) => {
                if (!results) {
                    results = regression.linear(values);
                }

                const prediction = results.predict(value);

                return Number.isNaN(prediction[1]) ? 0 : prediction[1];
            })
        );
    }
}
