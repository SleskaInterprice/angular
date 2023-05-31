import { Component, OnInit } from '@angular/core';
import { IProducts } from './models/products';
import { ProductServis } from './services/product.services';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private productServis: ProductServis) {

  }
  title = 'angular';
  products$: Observable<IProducts[]>;
  loading = false;
  term = "";

  ngOnInit(): void {
    this.products$ = this.productServis.getAll().pipe(tap(() => {
      this.loading = true;
    }));
  }
}
