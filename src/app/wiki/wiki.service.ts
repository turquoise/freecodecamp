import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikiService {

  private data = [];
  private dataTitle = [];
  private dataHeading = [];
  private dataUrl = [];
  private wikiList = [];

  constructor(private jsonp: Jsonp) {}

  // https://stackoverflow.com/questions/38204053/javascript-map-2-arrays-into-1-object

  search(term: string) {
    let wikiurl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // user's search value.
    params.set('action', 'opensearch');
    params.set('prop', 'revisions');
    params.set('rvprop', 'content');
    params.set('format', 'json');
    params.set('limit', '10' );
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(wikiurl, { search: params } )
        .map( (result) => {
          const data = result.json();
          const dataTitle = result.json()[1];
          const dataHeading = result.json()[2];
          const dataUrl = result.json()[3];

          //console.log('wikiservice data ', data);
          return data;
        });

      }





}
