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
  dataUser;
  user;
  name;
  nameOnline = [];
  nameOffline = [];
  listUsers = [];
  channel  = '';
  isStreaming: boolean;
  isDeleted: boolean;
  freecodecamp = '';
  userStreaming = '';
  checkOnline = '';
  channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  constructor(
    private twitchService: TwitchService,
  ) {}

  ngOnInit() {


    this.channels.forEach( item => {
      this.channel = item;
      console.log('this.channel ', this.channel);
      this.getTwitchUser(this.channel);
      this.getTwitchStream(this.channel);
      this.getTwitchChannel(this.channel);

    })


  }


  getTwitchChannel(item) {
    this.twitchService.getChannel(item)
      .subscribe( result => {
        this.dataChannel = result;
        //console.log('this.dataChannel ', this.dataChannel);
        // user, name, status, and game
      });
  }

  getTwitchStream(item) {
    this.twitchService.getStream(item)
      .subscribe( res => {
        this.dataStream = res;
        console.log('twitch data stream ', this.dataStream);
        let name = this.dataStream._links.self.slice(37);

        //console.log('this.dataStream.stream ', this.dataStream.stream );
        if (this.dataStream.stream !== null) {
          this.isStreaming = true;
          console.log('this.name is online', name);
          this.nameOnline.push(name);
          this.listUsers.push(name + ' SUCCESS');
          console.log('this.nameOnline ', this.nameOnline)

          if (this.dataStream === 'freecodecamp') {
            this.freecodecamp = 'online';
          }

        } else {
          this.isStreaming = false;
          console.log('name is offline ',name);
          this.nameOffline.push(name);
          this.listUsers.push(name + ' NULL');
          console.log('this.nameOffline ', this.nameOffline);
          //this.userStreaming = 'offline';
          this.freecodecamp = 'offline';
          //console.log('offline');
          this.checkOnline = 'offline';
        }
        if (this.dataStream === undefined) {
          this.isDeleted = true;
        }
        console.log('this.listUsers ', this.listUsers);
        //console.log('this.freecodecamp ', this.freecodecamp);

      });
  }

  getTwitchUser(item) {
    this.twitchService.getTwitchUser(item)
      .subscribe( result => {
        this.dataUser = result;
        this.user = this.dataUser.display_name;
        console.log('this.user ', this.user);
      });
  }

}
