import { HttpClient } from '@angular/common/http'; //api ye ulaşabileceğiz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productsResponseModel';

@Injectable({
  //anguler de product service de enjekte etmek için bunuda aynı şekilde ediyoruz.
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44318/api/products/getall';
  constructor(private httpClient: HttpClient) {}// ProductComponenti bellekte oluşturmaktadır.instance ni üretmektir.yani new lemektir
  //C# dependency injeksion servisleri yaptığımız yer burası

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
      
      }
    }
      
  

