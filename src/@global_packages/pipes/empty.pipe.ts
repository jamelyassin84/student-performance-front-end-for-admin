import { Pipe, PipeTransform } from '@angular/core';
import { empty } from '@global_packages/helpers/helpers';

@Pipe({
    name: 'empty',
})
export class EmptyPipe implements PipeTransform {
    transform(item: any) {
        return empty(item);
    }
}
