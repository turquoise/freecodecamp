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
  search = 'freecodecamp';

  constructor(private twitchService: TwitchService) { }

  // https://dev.twitch.tv/

// https://dev.twitch.tv/docs/v5/guides/embed

// https://dev.twitch.tv/docs/v5/guides/using-the-twitch-api/

// https://codepen.io/freeCodeCamp/pen/Myvqmo


  ngOnInit() {
    this.getTwitch();

    $.ajax({
     url:'https://api.twitch.tv/kraken/streams/Jonathan_x64?callback=?',
     dataType:'jsonp',
     success:function(channel) {
          //request succeeded, check channel status here
          console.log('yes');
     },
     error:function() {
          //request failed
          console.log('no');
     }
 });
  }

  getTwitch() {
    this.twitchService.getTwitch()
      .subscribe( result => {
        this.items = result;
        console.log('twitch component result ', result);
      });
  }

}
