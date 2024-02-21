import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <nav
      class=" bg-white w-full flex relative justify-between items-center mx-auto mt-8 px-8 h-20"
    >
      <!-- logo -->
      <div class="inline-flex">
        <a class="_o6689fn" href="/">
            <img src="logo/cibo-logo.svg" width="200" height="80" priority>
        </a>
      </div>

      <!-- end logo -->

      <!-- search bar -->
      <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
          <div class="inline-flex items-center max-w-full">
            <button
              class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
              type="button"
            >
              <div class="block flex-grow flex-shrink overflow-hidden">
                Start your search
              </div>
              <div
                class="flex items-center justify-center relative  h-8 w-8 rounded-full"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                                display: block;
                                fill: none;
                                height: 12px;
                                width: 12px;
                                stroke: currentcolor;
                                stroke-width: 5.33333;
                                overflow: visible;
                            "
                >
                  <g fill="none">
                    <path
                      d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <!-- end search bar -->
    </nav>
    <!--Nav-->
    <!-- <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
      >
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul
              class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
            >
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >About</a
                >
              </li>
              
              
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >Contatti</a
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="order-1 md:order-2">
          <a
            class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="#"
          >
            <img ngSrc="./logo/chiantilicius.svg" width="400" height="116" priority>
          </a>
        </div>

        <div class="order-2 md:order-3 flex items-center" id="nav-content">
        <ul
              class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
            >
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >Ricette</a
                >
              </li>
              
            </ul>
        </div>
      </div>
    </nav> -->
  `,
  styles: ``,
})
export class HeaderComponent {}
