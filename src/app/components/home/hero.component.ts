import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel.component";

@Component({
    selector: 'blog-hero',
    standalone: true,
    template: `
    <div class="carousel relative container mx-auto" style="max-width:1600px;">
      <div class="carousel-inner relative overflow-hidden w-full">
        <blog-carousel />
      </div>
    </div>
  `,
    styles: ``,
    imports: [CarouselComponent]
})
export class HeroComponent {}
