import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../BackendService';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = []
  constructor(public MyActivatedRoute: ActivatedRoute, public MyBackendService: BackendService) { }

  ngOnInit() {
    let currentCategoryId = this.MyActivatedRoute.snapshot.params.id
    this.MyBackendService.GetAllProducts({
      category_id: currentCategoryId
    })
      .subscribe((resp: any) => {
        if (resp.message === 'success') {
          this.products = resp.data

        } else {
          alert("error")
        }
      })
  }

}
