import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  c_form: FormGroup;
  error: boolean;
  id: any;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _service: CategoryService,
    private router: Router
  ) {
    this.c_form = _fb.group({
      "name": ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    });
    this.error = false;
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  submit(data: JSON) {
    this._service.create(data, this.id).subscribe(res => {
      if (res) {
        this.router.navigate(['/inventories/view/',this.id])
      } else {
        this.error = true;
      }
    });
  }

}
