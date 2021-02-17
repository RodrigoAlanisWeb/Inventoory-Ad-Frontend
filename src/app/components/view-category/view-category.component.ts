import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  products: any;
  id: any;

  constructor(
    private _product: ProductService,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.paramMap.get('id');
    this.products = false;
    _product.getAll(this.id).subscribe((res: any) => {
      if (res.products.length > 0) {
        console.log(res);
        this.products = res.products;
        return;
      }
    })
  }

  ngOnInit(): void {
  }

}
