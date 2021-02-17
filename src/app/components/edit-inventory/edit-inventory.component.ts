import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {
  d_form: any;
  error: boolean;
  id: any;
  inventory: any;
  
  constructor(
    private _fb: FormBuilder,
    private _service: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.error = false;
    this.id = this.route.snapshot.paramMap.get('id');
    _service.get(this.id).subscribe((res: any) => {
      if (res) {
        this.inventory = res.inventory;
        this.d_form = _fb.group({
          "name": [this.inventory.name,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])],
          "description": [this.inventory.description, Validators.compose([Validators.required,Validators.minLength(10)])]
        });
      }
    })
    this.d_form = null;
  }

  ngOnInit(): void {
  }

  submit(data: JSON) {
    this._service.save(data,this.id).subscribe(res => {
      if (res) {
        this.router.navigate(['/inventories'])
      } else {
        this.error = true;
      }
    });
  }

}
