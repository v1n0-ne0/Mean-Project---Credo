import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  template: `
    <header id="dash">
      <h1>Welcome to Fruity Shop</h1>
      <p>India's Largest Online Fruit Shop</p>
      <a *ngIf="_authService.loggedIn()" routerLink='/login' class="button">Shop Now</a>
      <!-- <div *ngIf="_authService.loggedIn(); then logged else notLogged"></div>
      <a #logged routerLink='/products' class="button">Shop Now</a>
      <a #notLogged routerLink='/home' class="button">Shop Now</a>
      <!-- <ng-template #logged routerLink='/products'></ng-template>
      <ng-template #notLogged routerLink='/login'></ng-template> -->
    </header>
  `,
  styles: [`
     * {
         margin: 0;
         padding: 0;
      }
      #dash {
        background-image: url('../../../assets/landing-bg.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
      }
      #dash h1 {
        font-size: 50px;
        line-height: 1.2;
        color: #6D214F;
      }
      #dash p {
        font-size: 20px;
        color: #6D214F;
      }
      #dash .button {
        font-size: 18px;
        color: #6D214F;
        border: 2px solid #2C3A47;
        padding: 10px 20px;
        border-radius: 10px;
        margin-top: 20px;
      }
      #dash .button:hover {
        text-decoration: none;
        background-color: #33d9b2;
        color: black;
        border-color: green;
      }
  `]
})
export class LandingComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

}
