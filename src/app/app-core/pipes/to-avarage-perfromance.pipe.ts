import { Pipe, PipeTransform } from '@angular/core';
import { StudentPerformance } from '../store/performance/performance.model';

@Pipe({
    name: 'to_average_performance',
})
export class ToAveragePerformancePipe implements PipeTransform {
    transform(performances: StudentPerformance[]): number {
        let total = 0;

        performances.forEach((performance) => {
            total += performance.performance;
        });

        return total / performances.length;
    }
}
