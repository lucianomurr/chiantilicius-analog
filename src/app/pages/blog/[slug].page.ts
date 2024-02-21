import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article class="max-w-screen-lg mx-auto mt-12">
    <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
            {{post.attributes.title}}
          </h2>
          <a 
            href="#"
            class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {{post.attributes.slug}}
          </a>
        </div>

        <img [src]="post.attributes.coverImage" class="w-full object-cover lg:rounded" style="height: 28em;"/>
      </div>
      <analog-markdown [content]="post.content" class="flex flex-col lg:flex-row lg:space-x-12"/>
    </article>
    }
  `,
})
export default class HomeComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
