import { Component, OnInit } from '@angular/core';
import { TributeService } from './tribute.service';

@Component({
  selector: 'app-tribute',
  templateUrl: './tribute.component.html',
  styleUrls: ['./tribute.component.css'],
  providers: [TributeService]
})
export class TributeComponent implements OnInit {

  album: any = 'queen';



  constructor(private tributeService: TributeService) { }

  ngOnInit() {

  }

  getTributeAlbums() {
    // this.tributeService.getSpotifyApi()
    //   .subscribe( result => {
    //     console.log('tribute result ', result);
    //     this.album = result;
    //   });
  }

}
