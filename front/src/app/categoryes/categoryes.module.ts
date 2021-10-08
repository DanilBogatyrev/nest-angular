import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryesComponent } from './categoryes.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CategoryesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CategoryesComponent]
})
export class CategoryesModule { }
