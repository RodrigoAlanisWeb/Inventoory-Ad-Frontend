import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  id: any;
  categories: any;

  constructor(
    private route: ActivatedRoute,
    private _service: CategoryService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.init();
    console.log(this.id);
  }

  init() {
    this._service.getAll(this.id).subscribe((res: any) => {
      if (res) {
        this.categories = res.categories;
      }
    });
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    let verify = confirm("Are You Sure?");
    if (verify) {
      this._service.delete(id).subscribe(res => {
        if (res) {
          this.init()
        }
      });
    }
  }

}
