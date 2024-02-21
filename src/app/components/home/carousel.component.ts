import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.interface';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'blog-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if(postsList$ | async; as postList){ 
      
      @for(post of postList; track $index){

        <section
          class="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
          style="max-width:1600px; height: 32rem; background-image: url('{{
            post.yoast_head_json.og_image[0].url
          }}');"
        >
          <div class="container mx-auto">
            <div
              class="flex flex-col w-full lg:w-1/2 justify-center items-start  p-6 tracking-wide bg-white opacity-75	"
            >
              <h1 class="text-black text-2xl my-4">
                {{ post.title.rendered }}
              </h1>
              <a
                class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                routerLink="/wordpress/{{ post.slug }}"
                [innerHTML]="post.excerpt.rendered"
              ></a>
            </div>
          </div>
        </section>

      } 
    }
  `,
})
export class CarouselComponent {
  public postsList$: Observable<Post[]>;

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.getPosts();
  }
  getPosts() {
    this.postsList$ = this.http.get<Post[]>(
      `https://www.cxcibo.it/wp-json/wp/v2/posts/?per_page=1&page=1`
    );
  }
}
