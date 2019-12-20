import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    constructor(public MyHttpClient: HttpClient) {

    }

    UserSignUp(data) {
        return this.MyHttpClient.post('http://localhost:8085/signup', data)
    }
    UserSignIn(data) {
        return this.MyHttpClient.post('http://localhost:8085/signin', data, { withCredentials: true })
    }

    InsertCategory(data) {
        return this.MyHttpClient.post('http://localhost:8085/insertcategory', data, { withCredentials: true })
    }


    RemoveCategory(data) {
        return this.MyHttpClient.post('http://localhost:8085/removecategory', data, { withCredentials: true })
    }

    GetAllCategories() {
        return this.MyHttpClient.get('http://localhost:8085/getallcategories', { withCredentials: true })
    }

    GetAllProducts(data) {
        return this.MyHttpClient.post('http://localhost:8085/getallproducts', data, { withCredentials: true })
    }

}