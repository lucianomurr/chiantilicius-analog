//

// const Http = new XMLHttpRequest();
// const url='https://www.cxcibo.it/wp-json/wp/v2/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const { limit, page } = getQuery(event);
  const response = await fetch(
    `https://www.cxcibo.it/wp-json/wp/v2/posts/?per_page=${limit}&page=${page}`
  );
  return await response.json();
});
