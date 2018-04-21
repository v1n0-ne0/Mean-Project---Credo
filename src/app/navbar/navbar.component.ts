import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-md navbar-light bg-success">
    <a href="" class="navbar-brand">Fruity Shop</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a routerLink='/products' class="nav-link">Products</a>
        </li>
        <li class="nav-item">
          <a routerLink='/cart' class="nav-link">My Cart</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
