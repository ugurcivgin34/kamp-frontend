  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent}, //patcmatch ana sayfamızla eşit olacak,başka birşey gelirse hesaba katma
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent} //: nokta demek parametreyi belirttiiğimzi gösterir
  //ana sayfa ne olsun, herhangi birşey verilmediğpinde ne olsun anlamı katıyor path:"" olayı
];
  //const sabit demek tir.Sadece contstructor ile değiştirebiliriz

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
