import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchService {

  constructor(private jsonp: Jsonp) { }

  // https://dev.twitch.tv/docs/v5/guides/using-the-twitch-api/#getting-a-client-id
  // https://codecraft.tv/courses/angular/http/jsonp-with-observables/

  client_id = 'b7g5stpwmz0u9e72f6a4myuvtawk7f';
  twitch_url_root = `https://api.twitch.tv/kraken/`;

  getTwich(term: string) {
    let twitch_url = `${this.twitch_url_root}?term=${term}&callback=JSONP_CALLBACK`
    this.jsonp.request(`${twitch_url}`)
      .map( res => {
        return res.json()
      });
  }



}
