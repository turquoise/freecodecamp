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

  term = 'London';
  items: Observable<Array<string>>;

  constructor(private wikiService: WikiService) {
    this.items = wikiService.getWiki(this.term);



  }

  // https://www.mediawiki.org/wiki/API:Main_page

  ngOnInit() {


  }





}
