import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {

  items: Observable<string[]>;
  summary: Observable<string[]>;
  url: Observable<string[]>;
  userSearch = 'London';
  wikiURL = "https://en.wikipedia.org/w/api.php";
  wikiSearchTitle = [];
  wikiHeading = [];
  wikiSummary = [];
  wikiUrl = [];
  wikiData = [];
  randomWikiUrl = 'https://en.wikipedia.org/wiki/Special:Random';


  constructor(private wikiService: WikiService) {}



  ngOnInit() {
    this.search(this.userSearch);
    this.jqueryTest();

  }

  jqueryTest() {
    this.wikiURL += '?' + $.param({
    'action' : 'opensearch',
    'search' :  this.userSearch,
    'prop'  : 'revisions',
    'rvprop' : 'content',
    'format' : 'json',
    'limit' : 10
});

 $.ajax( {
    url: this.wikiURL,
    dataType: 'jsonp',
    success: function(data) {
       //console.log('jquery data' ,data);
       //this.wikiSearchTitle = data[0];
       //this.wikiUrl = data[3];
       //this.wikiHeading = data[1];
       //this.wikiSummary = data[2];
       this.wikiData = data;
       //console.log('this.wikiSearchTitle ', this.wikiSearchTitle);
       //console.log('this.wikiHeading ', this.wikiHeading);
       //console.log('this.wikiSummary ', this.wikiSummary);
       //console.log('this.wikiUrl ', this.wikiUrl);
       console.log('this.wikiData ', this.wikiData);
    }
} );
  }

  

  search(searchTerm) {
    //this.items = this.wikiService.search(searchTerm);
    this.wikiService.search(searchTerm)
      .subscribe( result => {
        console.log('wiki component result ', result);

        this.summary = result[2];
        this.url = result[3];
        this.items = result;

        console.log('this.summary ', this.summary);
        console.log('this.url ', this.url);
        console.log('this.items ', this.items);

      });



  }


}
