import { Component, OnInit } from '@angular/core';
import { TributeService } from './tribute.service';

@Component({
  selector: 'app-tribute',
  templateUrl: './tribute.component.html',
  styleUrls: ['./tribute.component.css'],
  providers: [TributeService]
})
export class TributeComponent implements OnInit {

  searchStr: string;
  imageUrl = 'https://commons.wikimedia.org/wiki/';


  constructor(private tributeService: TributeService) { }

  ngOnInit() {
    this.getGoogleBooks();
    this.getWikiData();
  }

  getGoogleBooks() {
    this.tributeService.getGoogleBooks()
      .subscribe( res => console.log('google books res ', res));
  }

  getWikiData() {
    this.tributeService.search()
      .subscribe( res => console.log('wiki res ', res));
  }



}
