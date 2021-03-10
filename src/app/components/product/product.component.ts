import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModel } from 'src/app/models/productsResponseModel';
import { ProductService } from 'src/app/services/product.service';

//axios,fetch react tarafında

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //console.log('Init çalıştı');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
    
  }
}

