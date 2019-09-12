import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getImages() {
    const url =
      "https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=667a6ce5f358b237ec13e9d99bb659de&group_id=2309748%40N20&format=rest";
    return this.http.get("https://api.myjson.com/bins/13hktd", {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
