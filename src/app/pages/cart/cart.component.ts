import { Component, OnInit, Input } from '@angular/core';
import { FetchProductsService } from '../../fetch-products.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  template: `
    <app-navbar></app-navbar>
    <h1>My Cart</h1>
    <div class="row mt-5">
  <div class="col-md-3 mb-3" *ngFor="let product of CartItems">
    <div class="card text-center">
      <div class="card-body">
        <img class="card-image img-thumbnail" [src]="product.path" alt="ProductImage">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.price | currency: 'INR' }}/Kg</p>
        {{ product._id }}
      </div>
      <!-- <div class="card-footer text-muted">
        {{ event.date | date:'shortDate' }}
      </div> -->
    </div>
  </div>
</div>
  `,
  styles: []
})
export class CartComponent implements OnInit {

  CartItems = [];

  constructor(private _fetchCart: FetchProductsService,
  private _router: Router) { }

  ngOnInit() {
    this._fetchCart.viewCart()
    .subscribe(
      res => this.CartItems = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }

}
