import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikiService {

  private data = [];
  private dataTitle = [];
  private dataHeading = [];
  private dataUrl = [];

  constructor(private jsonp: Jsonp) {}

  // https://codecraft.tv/courses/angular/http/jsonp-with-observables/

  search(term: string) {
    let wikiurl = 'http://en.wikipedia.org/w/api.php';
    // let api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    //let api2 = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json';
    let params = new URLSearchParams();
    params.set('search', term); // user's search value.
    params.set('action', 'opensearch');
    params.set('prop', 'revisions');
    params.set('rvprop', 'content');
    params.set('format', 'json');
    params.set('limit', '10' );
    params.set('callback', 'JSONP_CALLBACK');

    // return this.jsonp.get(wikiurl, { search: params})
    //     .map(
    //       result => result = result.json()[1]
    //     );

    return this.jsonp.get(wikiurl, { search: params })
        .map( (result) => {
          const data = result.json();
          const dataTitle = result.json()[1];
          const dataHeading = result.json()[2];
          const dataUrl = result.json()[3];
          console.log('wikiservice data ', data);
          return data;
        })
        // I need to do a forEach loop over the results.


      }





}
