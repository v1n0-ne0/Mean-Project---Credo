import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';


@Component({
  selector: 'app-register',
  template: `
  <div class="row pt-5 reg">
  <div class="col-md-6 mx-auto">
    <div class="card rounded-0">
      <div class="card-header">
        <h3 class="mb-0">Register</h3>
      </div>
      <div class="card-body">
        <form class="form">
          <div class="form-group">
            <label>E-mail</label>
            <input [(ngModel)]="registeredUserData.email" name="email" type="text" class="form-control rounded-0" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input [(ngModel)]="registeredUserData.password" name="password" type="password" class="form-control rounded-0" required>
          </div>
          <button (click)="registerUser()" type="button" class="btn btn-primary float-right">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
    .reg {
      width: 70%;
      margin-left: 15vw;
    }
  `]
})
export class RegisterComponent implements OnInit {

  registeredUserData = {};

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registeredUserData)
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
