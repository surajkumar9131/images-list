import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from "../../common.service";

@Component({
  selector: "app-image-details",
  templateUrl: "./image-details.component.html",
  styleUrls: ["./image-details.component.scss"]
})
export class ImageDetailsComponent implements OnInit {
  id: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    console.log(this.id);
  }
}
