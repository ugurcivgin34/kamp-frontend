import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  //anguler de product service de enjekte etmek için bunuda aynı şekilde ediyoruz.
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44318/api/';

  constructor(private httpClient: HttpClient) { } // ProductComponenti bellekte oluşturmaktadır.instance ni üretmektir.yani new lemektir
  //C# dependency injeksion servisleri yaptığımız yer burası

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
}
