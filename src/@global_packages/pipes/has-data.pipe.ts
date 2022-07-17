import { Pipe, PipeTransform } from '@angular/core';
import { empty, hasData } from '@global_packages/helpers/helpers';

@Pipe({
    name: 'has_data',
})
export class HasDataPipe implements PipeTransform {
    transform(item: any) {
        return hasData(item);
    }
}
