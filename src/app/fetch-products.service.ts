import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchProductsService {

  private _productsUrl = 'http://localhost:3000/api/products';
  private _productAdd = 'http://localhost:3000/api/addtocart';
  private _cartView = 'http://localhost:3000/api/getcart';
  private _cartItemDelete = 'http://localhost:3000/api/delete';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this._productsUrl);
  }

  addToCart(prod) {
    return this.http.post<any>(this._productAdd, prod);
  }

  viewCart() {
    return this.http.get<any>(this._cartView);
  }

  deleteItem(itemId) {
    return this.http.delete<any>(this._cartItemDelete, itemId);
  }

}
