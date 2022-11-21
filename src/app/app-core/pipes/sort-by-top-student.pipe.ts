import {Pipe, PipeTransform} from '@angular/core'
import {empty} from '@global_packages/helpers/helpers'
import {User} from '../services/student.service'
import {to_average_performance} from './to-avarage-perfromance.pipe'

@Pipe({
    name: 'sort_by_top_student',
})
export class SortByTopeStudentPipe implements PipeTransform {
    transform(users: User[]): User[] {
        return sort_by_top_student(users)
    }
}

export function sort_by_top_student(users: User[]): User[] {
    const hasValue = (value: number | undefined) => {
        if (!value) {
            return 0
        }

        return value
    }

    return users
        .filter((user) => {
            return !empty(user.performances)
        })
        .sort(
            (a, b) =>
                hasValue(to_average_performance(b.performances)) -
                hasValue(to_average_performance(a.performances)),
        )
}
