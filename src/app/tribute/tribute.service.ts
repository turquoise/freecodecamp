import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class TributeService {

  private data = [];
  private wikidata = [];

  // https://developers.google.com/books/
  // https://developers.google.com/books/docs/v1/getting_started

  constructor(private jsonp: Jsonp) {}

  getGoogleBooks() {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=JSONP_CALLBACK';
    let params = new URLSearchParams();
    params.set('search', 'harry potter'); // user's search value.
    params.set('action', 'opensearch');
    params.set('prop', 'revisions');
    params.set('rvprop', 'content');
    params.set('format', 'json');
    params.set('limit', '10' );
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url)
      .map( (result) => {
        const data = result.json();
        //console.log('tribute data ', data);
        return data;
      });
  }

  search() {
    // https://www.mediawiki.org/wiki/API:Tutorial
    //let wikiurl = 'http://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=images';
    let wikiurl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    //params.set('search', 'Harry Potter'); // user's search value.
    params.set('action', 'query');
    params.set('titles', 'San Francisco')
    //params.set('query', 'allimages');
    //params.set('rvprop', 'content');
    //params.set('title', 'Albert Einstein');
    params.set('prop', 'images');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(wikiurl, { search: params } )
        .map( (result) => {
          const wikidata = result.json();


          console.log('tributeservice wiki data ', wikidata);
          return wikidata;
        });

      }




}
