import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  inventories: any = false;

  constructor(
    private _service: InventoryService
  ) {
    this.init();
  }

  ngOnInit(): void {
    
  }

  init() {
    this._service.getAll().subscribe(res => {
      if (res.inventories) {
        this.inventories = res.inventories;
        return;
      } else {
        this.inventories = false;
      }
    });
  }

  delete(id: number) {
    let verify = confirm("Are You Sure?");
    if (verify) {
      this._service.delete(id).subscribe(res => console.log(res));
      this.init();
    }
  }

}
