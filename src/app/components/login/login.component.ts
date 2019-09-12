import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "angular-web-storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  loginDetails: any;
  loggedIn: any;
  constructor(private local: LocalStorageService, private router: Router) {}

  ngOnInit() {
    this.loginDetails = this.local.get("userDetails");
    this.loggedIn = this.local.get("loggedIn") || false;
    if (this.loggedIn && this.loginDetails) {
      this.router.navigate(["/images"]);
    }
  }

  login(f) {
    const userDetails = {
      id: f.value.email,
      password: f.value.password
    };
    this.local.set("userDetails", userDetails);
    this.local.set("loggedIn", true);
    this.router.navigate(["/images"]);
  }
}
