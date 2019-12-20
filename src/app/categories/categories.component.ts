import { Component, OnInit } from '@angular/core';
import { BackendService } from '../BackendService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any = []
  category_name: string = ''
  constructor(public MyBackendService: BackendService,
    public MyRouter: Router) { }

  refreshData() {
    this.MyBackendService.GetAllCategories()
      .subscribe((resp: any) => {
        let userRole = localStorage.getItem('role')
        if (resp.message === 'success' && userRole === 'admin') {
          this.categories = resp.data
        } else {
          alert('you are not admin ..')
        }
      })
  }


  ngOnInit() {

    this.refreshData()
  }

  handleRemoveCategory(id) {
    this.MyBackendService.RemoveCategory({
      category_id: id
    }).subscribe((resp: any) => {
      if (resp.message === 'deleted') {
        // alert("deleted")
        this.refreshData()

      } else {
        alert("error")
      }
    })
  }


  handleInsertCategory() {
    this.MyBackendService.InsertCategory({
      category_name: this.category_name
    })
      .subscribe((resp: any) => {
        if (resp.message === 'success') {
          this.refreshData()

        } else {
          alert("error")
        }
      })
  }

  navigateToProducts(id) {
    this.MyRouter.navigate(['/products',id])
  }

}
