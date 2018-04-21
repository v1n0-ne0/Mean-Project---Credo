import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!-- <app-navbar></app-navbar> -->
      <!-- <app-landing></app-landing> -->
      <!-- <app-login></app-login> -->
      <!-- <app-register></app-register> -->
      <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'app';
}
