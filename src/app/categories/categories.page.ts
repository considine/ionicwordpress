import { Observable } from "rxjs";
import { PostsService } from "./../posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "categories.page.html",
  styleUrls: ["categories.page.scss"]
})
export class CategoriesPage implements OnInit {
  public categories$: Observable<any>;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private postSrvc: PostsService) {}

  ngOnInit() {
    this.categories$ = this.postSrvc.fetchPostCategories();
  }
}
