import { Component, OnInit, OnDestroy } from '@angular/core';
import { TributeService } from './tribute.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-tribute',
  templateUrl: './tribute.component.html',
  styleUrls: ['./tribute.component.css'],
  providers: [TributeService]
})
export class TributeComponent implements OnInit, OnDestroy {

  private googleBooksSubscription: Subscription;
  private wikiDataSubscription: Subscription;
  private wikiSearchSubscription: Subscription;

  searchStr: string;
  imageUrl = 'https://commons.wikimedia.org/wiki/';
  books = [];
  book2Author = [];
  book2Desc = '';
  book2Title = '';
  book2Subtitle = '';
  book2Preview = '';
  book2Img = '';
  book2Publisher = '';
  book2PublishedDate = '';
  book1 = [];
  book1Author = [];
  book1Title = '';
  book1Preview = '';
  book1Desc = '';
  book1Publisher = '';
  book1PublishedDate = '';
  book1Img = '';

  wikiDesc = [];
  wikiUrl = [];
  wikiName = [];
  wikiColor = [];
  wikiColorDesc = [];
  wikiColorTitle = [];
  wikiColorUrl = [];
  wikiData = [];
  wikiExtract = [];
  authors;
  description = '';
  previewLink = '';
  image = '';


  constructor(private tributeService: TributeService) { }

  ngOnInit() {
    this.getGoogleBooks();
    this.getWikiData();
    this.getWikiSearch();
    //this.getWikiExtract();

  }

  ngOnDestroy() {
    this.googleBooksSubscription.unsubscribe();
    this.wikiSearchSubscription.unsubscribe();
    this.wikiDataSubscription.unsubscribe();
  }

  getGoogleBooks() {
    this.googleBooksSubscription = this.tributeService.getGoogleBooks()
      .subscribe( res =>  {
        this.books = res;
        this.book2Author = res.items[1].volumeInfo.authors;
        this.book2Title = res.items[1].volumeInfo.title;
        this.book2Subtitle = res.items[1].volumeInfo.subtitle;
        this.book2Preview = res.items[1].volumeInfo.previewLink;
        this.book2Desc = res.items[1].volumeInfo.description;
        this.book2Img = res.items[1].volumeInfo.imageLinks.thumbnail;
        this.book2Publisher = res.items[1].volumeInfo.publisher;
        this.book2PublishedDate = res.items[1].volumeInfo.publishedDate;

        this.book1 = res.items[0];
        this.book1Author = res.items[0].volumeInfo.authors;
        this.book1Title = res.items[0].volumeInfo.title;
        this.book1Preview = res.items[0].volumeInfo.previewLink;
        this.book1Desc = res.items[0].volumeInfo.description;
        this.book1Publisher = res.items[0].volumeInfo.publisher;
        this.book1PublishedDate = res.items[0].volumeInfo.publishedDate;
        this.book1Img = res.items[0].volumeInfo.imageLinks.thumbnail;

        console.log('this.books ', res.items);

      });
  }

  // getWikiExtract() {
  //   // Johannes Itten Extract
  //   this.tributeService.searchWikiExtract()
  //     .subscribe( res => {
  //       this.wikiExtract = res.query.pages[451137].extract;
  //       console.log('getWikiExtract ', res.query.pages[451137].extract);
  //     });
  // }

  getWikiSearch() {
    // Color theory
    this.wikiSearchSubscription = this.tributeService.searchWiki()
      .subscribe( res => {
        this.wikiColor = res;
        this.wikiColorTitle = res[1][0];
        this.wikiColorDesc = res[2][0];
        this.wikiColorUrl = res[3][0];

        console.log('color theory', res);

      });

  }



  getWikiData() {
    // Johannes Itten
    this.wikiDataSubscription = this.tributeService.search()
      .subscribe( res => {
        this.wikiData = res;
        this.wikiName = res[1];
        this.wikiDesc = res[2];
        this.wikiUrl = res[3];
        console.log('johanes itten ', res);
      });
  }



}
