import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class TributeService {

  private data = [];

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
        console.log('tribute data ', data);
        return data;
      });
  }



}
