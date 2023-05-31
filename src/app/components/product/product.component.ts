import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  title = 'angular';

  @Input() product: IProducts;

  details: boolean = false;
}
