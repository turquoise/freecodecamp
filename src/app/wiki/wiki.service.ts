import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikiService {

  // https://no-shadow-angular-io.firebaseapp.com/docs/ts/latest/guide/server-communication.html#!#cors

  constructor(private jsonp: Jsonp) { }

  search(term: string) {
    let wikiurl = 'http://en.wikipedia.org/w/api.php';
    let api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    let params = new URLSearchParams();
    params.set('search', term); // user's search value.
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(api, { search: params})
        .map(request => request.json()[1]);

  }


}
