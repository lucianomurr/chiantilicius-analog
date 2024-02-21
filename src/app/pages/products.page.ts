import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
      Products Page
    </h2>

    <router-outlet></router-outlet>
  `,
})
export default class ProductsComponent {}
