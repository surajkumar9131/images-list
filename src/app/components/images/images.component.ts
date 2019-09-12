import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.scss"]
})
export class ImagesComponent implements OnInit {
  images: any;
  photo: any;
  activeImage: any;
  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.getAllImages();
    this.activeImage = null;
    this.images = [];
  }

  getImages(images) {
    images.forEach((e, index) => {
      const image = `https://farm${e._farm}.staticflickr.com/${e._server}/${e._id}_${e._secret}.jpg`;
      this.images.push({ id: index + 1, url: image });
    });
  }

  getAllImages() {
    this.commonService.getImages().subscribe(
      response => {
        this.getImages(response);
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

  goToImageUrl(item) {
    this.activeImage = item.i;
    this.router.navigate(["/images", item.id]);
  }
}
