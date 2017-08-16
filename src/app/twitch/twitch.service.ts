import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchService {

  private data = [];
  channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  twitch_url = `https://api.twitch.tv/kraken/`;
  apiBaseUrl = 'https://wind-bow.hyperdev.space/twitch-api/streams/';
  channel_test_id = '44322889';
  user = 'monstercat';
  query = '?callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) { }

  // https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user
  // https://stackoverflow.com/questions/40537285/calling-the-twitch-api-with-angular-2

  client_id = 'b7g5stpwmz0u9e72f6a4myuvtawk7f';
  //client_secret = 'w078dx82nuc4farpdxdsyxoo3t5ikb';



  getTwitch(): Observable<string> {
    //let twitch = `${this.twitch_url}?term=${term}&callback=JSONP_CALLBACK`;
    //let twitch = `${this.twitch_url}streams/${this.channel_test_id}/${this.client_id}`;
    //let twitch = `${this.apiBaseUrl}${this.user}?client_id=${this.client_id}`;
    let twitch = 'https://api.twitch.tv/kraken/streams/Jonathan_x64?callback=JSONP_CALLBACK';
    // let params = new URLSearchParams();
    // params.set('search', term);

    return this.jsonp.get(twitch)
      .map( res => {
        const data =  res.json();
        console.log('twitch data ', data);
        return data;
      });
  }



}
