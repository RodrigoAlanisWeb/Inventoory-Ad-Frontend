import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  c_form: FormGroup;
  error: boolean;
  id: any;

  constructor(
    private _fb: FormBuilder,
    private _service: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.c_form = _fb.group({
      "name": ["",Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])],
      "description": ["", Validators.compose([Validators.required,Validators.minLength(10)])],
      "count": ["", Validators.required]
    });
    this.error = false;
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  submit(data: JSON) {
    this._service.create(this.id,data).subscribe(res => {
      if (res) {
        this.router.navigate(['categories/view/',this.id]);
      } else {
        this.error = true;
      }
    });
  }

}
