import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';
import { switchMap } from 'rxjs/operators';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id: number;
  products$: any;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    // this.route.paramMap.pipe(
    //   switchMap((res: any) => {
    //     return this.categoryService.getProductsByCategory(res.params.id);
    //   })
    // ).subscribe((res: any) => {
    //  this.products = res;
    // });

    this.products$ = this.route.paramMap.pipe(
       switchMap((res: any) => this.categoryService.getProductsByCategory(res.params.id))
     );
  }

}
