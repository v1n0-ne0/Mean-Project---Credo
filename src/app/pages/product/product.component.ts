import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from '../../fetch-products.service';
import { CartService } from './../../cart.service';
import { StorageService } from './../../storage.service';


@Component({
  selector: 'app-product',
  template: `
  <app-navbar></app-navbar>
  <div class="row mt-5">
  <div class="col-md-3 mb-3" *ngFor="let product of products">
    <div class="card text-center">
      <div class="card-body">
        <img class="card-image img-thumbnail" [src]="product.path" alt="ProductImage">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.price | currency: 'INR' }}/Kg</p>
        {{ product._id }}
        <button class="btn btn-primary" (click)="addToCart(product)">Buy Now</button>
        <button class="btn btn-danger"(click)="deleteFromCart(product._id)">Delete</button>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  products = [];
  // cartItems = {};

  constructor(private _fetchProducts: FetchProductsService,
  public storage: StorageService, public cart: CartService) { }

  ngOnInit() {
    this._fetchProducts.getProducts()
    .subscribe(
      res => this.products = res,
      err => console.log(err)
    );
  }

  addToCart(product: string) {
    // console.log(product);
    // this.cartItems.push(product);s
    // console.log(this.cartItems);
    // for (this.i = 0; this.i < this.cartItems.length; this.i++) {
    //   console.log(this.cartItems[this.i].name);
    // }
    // console.log(this.cartItems[0].name);
    console.log(product);
    this._fetchProducts.addToCart(product)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  deleteFromCart(id: string) {
    // this.cartItems = this.cartItems.filter(item => item !== product);
    // const index = this.cartItems.indexOf(product);
    // if (index > -1) {
    //   this.cartItems.splice(index, 1);
    // }
    // console.log(this.cartItems);
    this._fetchProducts.deleteItem(id)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
