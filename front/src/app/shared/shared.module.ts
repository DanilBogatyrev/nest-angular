import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ProductComponent, CommonModule
  ]
})
export class SharedModule { }
