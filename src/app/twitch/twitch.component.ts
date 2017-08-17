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
  dataStream;
  dataChannel;
  channel  = '';
  isStreaming: boolean;
  freecodecamp = '';
  userStreaming = '';
  channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  constructor(
    private twitchService: TwitchService,
  ) {}

  ngOnInit() {
    this.getTwitchChannels();
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
    this.channels.forEach( item => {
      console.log('item ', item);
      this.channel = item;
      this.getTwitchStream(this.channel);
    })

  }


  getTwitchChannels() {
    this.twitchService.getChannels()
      .subscribe( result => {
        this.dataChannel = result;
        console.log('twitch component channel ', this.dataChannel);
      });
  }

  getTwitchStream(item) {
    this.twitchService.getStream(item)
      .subscribe( res => {
        this.dataStream = res;
        console.log('twitch data stream ', this.dataStream);
        //console.log('this.dataStream.stream ', this.dataStream.stream );
        if (this.dataStream.stream !== null) {
          this.isStreaming = true;
          this.userStreaming = 'online';
          //console.log('online');
          if (this.channel === item) {
            this.freecodecamp = 'online';
          } else {
            this.freecodecamp = 'offline';
          }
        } else {
          this.isStreaming = false;
          this.userStreaming = 'offline';
          //console.log('offline');
        }
      });
  }

  getTwitchUser() {
    this.twitchService.getTwitchUser()
      .subscribe( result => {
        this.itemstest = result;
        console.log('twitch component test result ', this.itemstest);
      });
  }

}
