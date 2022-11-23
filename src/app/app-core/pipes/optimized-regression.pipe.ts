import {take, Observable, map} from 'rxjs'
import {Pipe, PipeTransform} from '@angular/core'
import {RegressionService} from '../services/regression.service'
import regression from 'regression'

@Pipe({name: 'to_optimized_regression'})
export class ToOptimizedRegressionPipe implements PipeTransform {
    transform(value: number) {
        return to_optimized_regression(value)
    }
}

export function to_optimized_regression(value: number) {
    const values = JSON.parse(localStorage.getItem('regression') as any)

    console.log(values)

    let results = regression.linear(values)

    const prediction = results.predict(value)

    return Number.isNaN(prediction[1]) ? 0 : prediction[1]
}
