import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "home/:category",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "posts/:id",
    loadChildren: "./post-detail/post-detail.module#PostDetailPageModule"
  },
  {
    path: "categories",
    loadChildren: "./categories/categories.module#CategoriesPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
