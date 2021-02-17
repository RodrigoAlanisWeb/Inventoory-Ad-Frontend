import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { InventoriesComponent } from '../inventories/inventories.component';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.css']
})
export class CreateInventoryComponent implements OnInit {

  c_form: FormGroup;
  error: boolean;

  constructor(
    private _fb: FormBuilder,
    private _service: InventoryService,
    private router: Router
  ) {
    this.c_form = _fb.group({
      "name": ["",Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])],
      "description": ["", Validators.compose([Validators.required,Validators.minLength(10)])]
    });
    this.error = false;
  }

  ngOnInit(): void {
  }

  submit(data: JSON) {
    this._service.create(data).subscribe(res => {
      if (res) {
        this.router.navigate(['/inventories'])
      } else {
        this.error = true;
      }
    });
  }

}
