import { Component, OnInit } from '@angular/core';
import { CategoryesService } from './categoryes.service';
import { Category } from './model/category.model';

@Component({
  selector: 'app-categoryes',
  templateUrl: './categoryes.component.html',
  styleUrls: ['./categoryes.component.scss']
})
export class CategoryesComponent implements OnInit {
  categoryes: Category[];

  constructor(private categoryesService: CategoryesService) { }

  ngOnInit(): void {
    this.getCategoryes();
  }

  getCategoryes(): void {
    this.categoryesService.getCategoryes().subscribe(res => this.categoryes = res);
  }

}
