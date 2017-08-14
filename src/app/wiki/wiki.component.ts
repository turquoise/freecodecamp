import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {

  items: Observable<string[]>;
  userSearch = 'London';

  constructor(private wikiService: WikiService) {}

  // https://www.mediawiki.org/wiki/API:Main_page
  // https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

  ngOnInit() {
    this.search(this.userSearch);
  }
  search(term: string) {
    this.items = this.wikiService.search(term);
    console.log('wiki this.items ', this.items);
  }



}
