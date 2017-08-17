import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams, Headers, RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchService  {

  private data = [];
  private test = [];
  private dataStream = [];
  private streamUrl;

  private content = [];
  private userlist = ["freecodecamp"];
  private url = 'https://api.twitch.tv/kraken/search/streams';
  private channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  private client_id = 'b7g5stpwmz0u9e72f6a4myuvtawk7f';
  private callback = '$callback=JSONP_CALLBACK';
  options: RequestOptionsArgs;
  private searchChannel = '';


  apiBaseUrl: string = 'https://api.twitch.tv/kraken/users/';
  user: string = 'ESL_SC2';
  query: string = '?callback=JSONP_CALLBACK';

  constructor(
    private jsonp: Jsonp,
    private http: Http
  ) {
    this.options = {
      headers: new Headers({
        "Client-ID": 'b7g5stpwmz0u9e72f6a4myuvtawk7f'
      })
    }
  }

  // https://codepen.io/tubber/pen/mAKKmA
  // https://stackoverflow.com/questions/40537285/calling-the-twitch-api-with-angular-2
  //http://www.concretepage.com/angular-2/angular-2-http-get-parameters-headers-urlsearchparams-requestoptions-example
  // https://github.com/Lakston/angular-twitch-viewer/tree/master/src

  getChannels(): Observable<string> {

    return this.http.get(`https://api.twitch.tv/kraken/channels/freecodecamp`, this.options )
      .map( res => {
        const data = res.json();
        console.log('twitch service test items ', data);
        return data;
      })

}

getStream(item) {
  // null if the channel is not streaming.
  // let streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  //
  // streams.forEach( item => {
  //   console.log('item ', item);
  //   this.http.get(`https://api.twitch.tv/kraken/streams/${item}`, this.options)
  //   .map(res => {
  //     const dataStream = res.json();
  //     console.log('dataStream ', dataStream);
  //     return dataStream;
  //   })
  // })

  return this.http.get(`https://api.twitch.tv/kraken/streams/${item}`, this.options)
    .map(res => {
      const dataStream = res.json();
      console.log('dataStream ', dataStream);
      return dataStream;
    })

  }

  getTwitchUser() {
    return this.http.get('https://api.twitch.tv/kraken/users/freecodecamp?client_id=b7g5stpwmz0u9e72f6a4myuvtawk7f')
      .map( res => {
        console.log('test ', res.json())
        const test = res.json();
        return test;
      })
  }






}
