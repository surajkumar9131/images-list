import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ImagesComponent } from "./components/images/images.component";
import { ImageDetailsComponent } from "./components/image-details/image-details.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "images", component: ImagesComponent },
  { path: "images/:id", component: ImageDetailsComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
