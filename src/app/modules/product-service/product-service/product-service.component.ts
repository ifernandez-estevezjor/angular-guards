import { Component } from '@angular/core';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrl: './product-service.component.css'
})
export class ProductServiceComponent {

  constructor(){
    console.log('service component')
  }

  ngOnInit(): void {
    console.log('service component')
  }

}
