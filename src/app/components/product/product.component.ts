import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'; //api ye ulaşabileceğiz
import { ProductResponseModel } from 'src/app/models/productsResponseModel';

//axios,fetch react tarafında

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44318/api/products/getall';
  productResponseModel:ProductResponseModel = {
    data : this.products,
    message:"",
    success:true
  }

  constructor(private httpClient: HttpClient) {} // ProductComponenti bellekte oluşturmaktadır.instance ni üretmektir.yani new lemektir
  //C# dependency injeksion servisleri yaptığımız yer burası

  ngOnInit(): void {
    //console.log('Init çalıştı');
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products=response.data

      });
      
  }
}
