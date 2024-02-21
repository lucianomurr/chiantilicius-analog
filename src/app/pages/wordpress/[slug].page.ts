import { injectActivatedRoute } from '@analogjs/router';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.interface';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    @if (post$ | async; as post) {
    <article class="max-w-screen-lg mx-auto mt-12">
      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
            {{ post[0].title.rendered }}
          </h2>
          <a
            href="#"
            class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {{ post[0].slug }}
          </a>
        </div>

        <img
          [src]="post[0].yoast_head_json.og_image[0].url"
          class="w-full object-cover lg:rounded"
          style="height: 28em;"
        />
      </div>
      <div
        class="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100"
      >
        <!--content body-->
        <div>
          <p class="mt-2 p-8" [innerHTML]="post[0].content.rendered"></p>
        </div>
      </div>
    </article>
    }
  `,
})
export default class WordpressPage implements OnInit {
  private http = inject(HttpClient);

  public post$: Observable<Post[]>;

  //private readonly route = inject(ActivatedRoute); // this is injected from angular
  private route = injectActivatedRoute(); // this is injected from analogjs

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.parent!.snapshot!.paramMap;
    const slugFromRoute = routeParams.get('slug');

    this.post$ = this.http.get<Post[]>(
      `https://www.cxcibo.it/wp-json/wp/v2/posts?slug=${slugFromRoute}`
    );
  }
}
