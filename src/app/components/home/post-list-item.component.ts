import { ContentFile } from '@analogjs/content';
import { Component, Input } from '@angular/core';
import PostAttributes from 'src/app/post-attributes';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'blog-post-list-item',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <div class="bg-white rounded-lg border p-4">
      <img
        [ngSrc]="post.attributes.coverImage"
        width="300"
        height="200"
        alt="Placeholder Image"
        class="w-full h-48 rounded-md object-cover"
      />
      <div class="px-1 py-4">
        <div class="font-bold text-xl mb-2">{{ post.attributes.title }}</div>
        <p class="text-gray-700 text-base">
          {{ post.attributes.description }}
        </p>
      </div>
      <div class="px-1 py-4">
        <a
          [routerLink]="['/blog/', post.attributes.slug]"
          class="text-blue-500 hover:underline"
          >Read More</a
        >
      </div>
    </div>
  `,
})
export class PostListItemComponent {
  @Input() post: ContentFile<PostAttributes>;
}
