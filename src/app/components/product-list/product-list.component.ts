import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService : ProductService){}

  productData : any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.productData = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

}
