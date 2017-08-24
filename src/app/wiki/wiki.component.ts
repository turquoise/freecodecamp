import { Component, OnInit, OnDestroy } from '@angular/core';
import { WikiService } from './wiki.service';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit, OnDestroy {

  items: Observable<string[]>;

  private wikiSubscription: Subscription;

  heading;
  wikiList =[];
  item = [];
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

  }

  ngOnDestroy() {
    this.wikiSubscription.unsubscribe();
  }

  // jqueryTest() {
  //   this.wikiURL += '?' + $.param({
  //     'action' : 'opensearch',
  //     'search' :  this.userSearch,
  //     'prop'  : 'revisions',
  //     'rvprop' : 'content',
  //     'format' : 'json',
  //     'limit' : 10
  //   });
  // }

  search(searchTerm) {
    //this.items = this.wikiService.search(searchTerm);
    this.wikiSubscription = this.wikiService.search(searchTerm)
      .subscribe( result => {
        console.log('result ', result);
        this.items = result;
        const dataTitle = this.items[1];
        const dataHeading = this.items[2];
        const dataUrl = this.items[3];
        //console.log('this.items ', this.items[1][0], this.items[2][0], this.items[3][0] );
        //console.log('this.items ', this.items[1][1], this.items[2][1], this.items[3][1] );
        this.wikiList = dataTitle.map( (x, i) => {
          return {
            title: x,
            heading: dataHeading[i],
            url: dataUrl[i]
          }
        })
        console.log('this.wikiList ', this.wikiList);
      });
    }


}
