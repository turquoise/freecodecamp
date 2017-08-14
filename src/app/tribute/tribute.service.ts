import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()

export class TributeService {

  tribute;
  
  redirect_url = 'http://localhost:4200/tribute';
  BASE_URL = 'https://api.spotify.com/v1/search?';
  FETCH_URL = `${this.BASE_URL}q=${this.tribute}&type=artist&limit=1`;
  ALBUM_URL = 'https://api.spotify.com/v1/artists/';


  constructor(private http: Http) {}


// https://developer.spotify.com/web-api/

  getSpotifyApi() {
    return this.http.get(this.FETCH_URL)
      .map(res => res.json());


  }

}
