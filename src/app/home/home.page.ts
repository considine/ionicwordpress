import { PostsService } from "./../posts.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(
    private postSrvc: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  posts$: Observable<any>;
  loadPost(post: any) {
    this.router.navigate(["/posts", post.id]);
  }
  ngOnInit() {
    this.posts$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          params.get("category")
            ? this.postSrvc.fetchPostsByCategory(params.get("category"))
            : this.postSrvc.fetchPosts()
      )
    );
  }
}
