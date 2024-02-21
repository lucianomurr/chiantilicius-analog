import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/home/hero.component';
import { PostListItemComponent } from '../../components/home/post-list-item.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <blog-hero></blog-hero>
    <section class="bg-white py-8">
      <div
        class="bg-gradient-to-bl from-red-50 to-green-50 flex items-center justify-center w-full"
      >
        <div class="container mx-auto p-4">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
          >
            @for (post of posts;track post.attributes.slug) {
              <blog-post-list-item [post]="post" />
            }
          </div>
        </div>
      </div>
    </section>
  `,

  imports: [RouterLink, HeroComponent, PostListItemComponent],
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
