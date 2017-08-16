import { Component, OnInit } from '@angular/core';
import { TwitchService } from './twitch.service';
import { Observable } from 'rxjs/Observable';
import { Http, Jsonp, Request, Headers, RequestOptionsArgs } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css'],
  providers: [TwitchService]
})
export class TwitchComponent implements OnInit {

  items;
  channel = 'freecodecamp';
  //options: RequestOptionsArgs;

  constructor(
    private twitchService: TwitchService,
    //private http: Http,
    //private jsonp: Jsonp
  ) {
    // this.options = {
    //   headers: new Headers({
    //     "Client-ID": 'b7g5stpwmz0u9e72f6a4myuvtawk7f'
    //   })
    // }
  }


  ngOnInit() {
    this.getTwitch();
    //this.checkTwitch();
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://api.twitch.tv/kraken/channels/twitch',
    //   headers: {
    //     'Client-ID': 'b7g5stpwmz0u9e72f6a4myuvtawk7f'
    //   },
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });

  }

  // checkTwitch() {
  //   return this.http.get('https://api.twitch.tv/kraken/channels/twitch', this.options )
  //     .subscribe( res => {
  //       this.items = res.json();
  //       console.log('test items ', this.items);
  //     })
  //
  // }

  getTwitch() {
    this.twitchService.refresh()
      .subscribe( res => console.log('twitch component res ', res));
  }



  // getTwitch() {
  //   this.twitchService.refresh()
  //     .subscribe( result => {
  //       this.items = result;
  //       console.log('twitch component result ', result);
  //     });
  // }

}
