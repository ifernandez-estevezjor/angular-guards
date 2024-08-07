import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductServiceComponent } from './product-service/product-service/product-service.component';

const routes: Routes = [{ path: '', component: ProductServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductServiceRoutingModule { }
