import { Component, OnInit } from '@angular/core';
import { TwitchService } from './twitch.service';
import { Observable } from 'rxjs/Observable';

import * as $ from 'jquery';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css'],
  providers: [TwitchService]
})
export class TwitchComponent implements OnInit {




  items;
  itemstest;
  channel = 'freecodecamp';


  constructor(
    private twitchService: TwitchService,
  ) {

  }


  ngOnInit() {
    this.getTwitchChannels();
    this.getTwitchStream();
    this.getTwitchUser();
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

  getTwitchChannels() {
    this.twitchService.getChannels()
      .subscribe( res => console.log('twitch component res ', res));
  }

  getTwitchStream() {
    this.twitchService.getStream()
      .subscribe( res => console.log('twitch data stream ', res));
  }



  getTwitchUser() {
    this.twitchService.getTwitchUser()
      .subscribe( result => {
        this.itemstest = result;
        console.log('twitch component test result ', this.itemstest);
      });
  }

}
