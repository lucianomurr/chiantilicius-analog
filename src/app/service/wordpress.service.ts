import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Post } from "../models/post.interface";
import { toSignal } from "@angular/core/rxjs-interop";

//i want to create a new angular service for getting wordpress posts from the api api/v1/posts?limit=3&page=1
export class WordpressService {
    private http: HttpClient = inject(HttpClient);
    getAll(limit: number = 3, page: number = 1) {
        return toSignal(this.http.get<Post[]>(`api/v1/posts?limit=${limit}&page=${page}`), {initialValue: []} );       
    }
}