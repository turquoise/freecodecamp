import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitchService } from './twitch.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as $ from 'jquery';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css'],
  providers: [TwitchService]
})
export class TwitchComponent implements OnInit, OnDestroy {

  private twitchUserSubscription: Subscription;
  private twitchStreamSubscription: Subscription;
  private twitchChannelSubscription: Subscription;


  items;
  itemstest;
  dataStream;
  dataChannel;
  dataUser;
  user;
  name;
  //nameOnline = [];
  //nameOffline = [];
  //listUsers = [];
  twitchList = [];
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

  ngOnDestroy() {
    this.twitchUserSubscription.unsubscribe();
    this.twitchStreamSubscription.unsubscribe();
    this.twitchChannelSubscription.unsubscribe();
  }


  getTwitchChannel(item) {
    this.twitchChannelSubscription = this.twitchService.getChannel(item)
      .subscribe( result => {
        this.dataChannel = result;
        //console.log('this.dataChannel ', this.dataChannel);
        // user, name, status, and game
      });
  }

  getTwitchStream(item) {
    this.twitchStreamSubscription = this.twitchService.getStream(item)
      .subscribe( res => {
        this.dataStream = res;
        console.log('twitch data stream ', this.dataStream);
        let name = this.dataStream._links.self.slice(37);
        let game = '';
         let url = `https://www.twitch.tv/${name}`;
        //console.log('this.dataStream.stream ', this.dataStream.stream );
        if (this.dataStream.stream !== null ) {
          game = this.dataStream.stream.game;
          this.isStreaming = true;
          //this.nameOnline.push(name);
          //this.listUsers.push(name + ' SUCCESS');
          this.twitchList.push({
            user: name,
            status: 'is ONLINE',
            game: game,
            url : url
          })
          //console.log('this.nameOnline ', this.nameOnline)
          if (game !== null) {
            console.log('game ', game);
          }
          if (this.dataStream === 'freecodecamp') {
            this.freecodecamp = 'online';
          }

        } else {
          this.isStreaming = false;
          //console.log('name is offline ',name);
          //this.nameOffline.push(name);
          //this.listUsers.push(name + ' NULL');
          this.twitchList.push({
            user: name,
            status: 'is offline',
            game: 'N/A',
            url: 'offline'
          })
          //console.log('this.nameOffline ', this.nameOffline);
          //this.userStreaming = 'offline';
          this.freecodecamp = 'offline';
          //console.log('game ', 'N/A');
          //console.log('offline');
          this.checkOnline = 'offline';
        }

        if (this.dataStream === undefined) {
          this.isDeleted = true;
        }
        console.log('this.twitchList ', this.twitchList);
        //console.log('this.freecodecamp ', this.freecodecamp);

      });
  }

  getTwitchUser(item) {
    this.twitchUserSubscription = this.twitchService.getTwitchUser(item)
      .subscribe( result => {
        this.dataUser = result;
        this.user = this.dataUser.display_name;
        console.log('this.user ', this.user);
      });
  }

}
