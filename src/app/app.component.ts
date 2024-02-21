import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header.component';

@Component({
  selector: 'app-blog-root',
  standalone: true,
  template: `
    <blog-header />
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, HeaderComponent],
  host: {'some-binding': 'some-value'},
})
export class AppComponent {}
