import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  template: `
  <app-navbar></app-navbar>
  <div class="row pt-5 log">
  <div class="col-md-6 mx-auto">
    <div class="card rounded-0">
      <div class="card-header">
        <h3 class="mb-0">Login</h3>
      </div>
      <div class="card-body">
        <form class="form">
          <div class="form-group">
            <label>E-mail</label>
            <input [(ngModel)]="loginUserData.email" name="email" type="text" class="form-control rounded-0" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input [(ngModel)]="loginUserData.password" name="password" type="password" class="form-control rounded-0" required>
          </div>
          <button (click)="loginUser()" type="button" class="btn btn-success float-right">LogIn</button>
          <p>New User? <a routerLink="/register">Register Now</a></p>
        </form>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
    .log {
      width: 70%;
      margin-left: 15vw;
    }
    form p {
      margin-top: 50px;
      text-align: center;
    }
  `]
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      // res => console.log(res),
      // err => console.log(err)
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/products']);
      },
      err => console.log(err)
    );
  }

}
