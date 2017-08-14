import { Component, OnInit } from '@angular/core';
import { TributeService } from './tribute.service';
import { Artist } from './Artist';

@Component({
  selector: 'app-tribute',
  templateUrl: './tribute.component.html',
  styleUrls: ['./tribute.component.css'],
  providers: [TributeService]
})
export class TributeComponent implements OnInit {

  searchStr: string;
  searchRes: Artist[];

  constructor(private tributeService: TributeService) { }

  ngOnInit() {

  }

  searchMusic() {
    this.tributeService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      });
  }

  getTributeAlbums() {
    // this.tributeService.getSpotifyApi()
    //   .subscribe( result => {
    //     console.log('tribute result ', result);
    //     this.album = result;
    //   });
  }

}
