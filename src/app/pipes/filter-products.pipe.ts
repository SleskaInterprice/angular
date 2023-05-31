import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../models/products';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProducts[], search: string): IProducts[] {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  };

};
