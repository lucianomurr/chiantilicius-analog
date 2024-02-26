import { Component, Signal, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from 'src/app/models/product.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, CommonModule],
  template: `
    <p class="text-center mt-4 font-medium text-slate-500">List</p>

    @for (product of data(); track $index) {
    <div
      class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg"
    >
      <a
        [title]="product.name + ' details'"
        [routerLink]="['/products', product.id]"
      >
        <div class="relative text-white px-6 pb-6 mt-6">
          <span class="block opacity-75 -mb-1">{{ product.name }}</span>
          <div class="flex justify-between">
            <span
              *ngIf="product.description"
              class="block font-semibold text-xl"
              >{{ product.description }}</span
            >
          </div>
        </div>
      </a>
    </div>
    }
  `,
})
export default class ProductsListComponent {
  public data: Signal<Product[]> = this.getProducts();

  getProducts(): Signal<Product[]> {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Product[]>('/api/v1/products'), {initialValue: []} );
  }
}
