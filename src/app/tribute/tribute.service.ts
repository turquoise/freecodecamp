import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class TributeService {

  private data = [];
  private wikidata = [];
  private wikiRes = [];

  // https://developers.google.com/books/
  // https://developers.google.com/books/docs/v1/getting_started
  // https://stackoverflow.com/questions/1625162/get-text-content-from-mediawiki-page-via-api

  constructor(
    private jsonp: Jsonp,
    private http: Http
  ) {}

  getGoogleBooks() {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=johannes+itten&callback=JSONP_CALLBACK';
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
    params.set('search', 'Johannes Itten'); // user's search value.
    params.set('action', 'opensearch');
    params.set('prop', 'revisions');
    params.set('rvprop', 'content');
    params.set('format', 'json');
    params.set('limit', '10' );
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(wikiurl, { search: params } )
        .map( (result) => {
          const wikidata = result.json();
          //console.log('tributeservice wiki data ', wikidata);
          return wikidata;
        });

      }

      searchWikiExtract() {
        let url = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        //params.set('search', 'Color theory'); // user's search value.
        params.set('action', 'query');
        params.set('prop', 'extracts');
        params.set('titles', 'Johannes Itten');
        params.set('format', 'json');
        params.set('limit', '10' );
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(url, { search: params } )
            .map( (res) => {
              const wikiRes = res.json();
              //console.log('wikiRes ', wikiRes);
              return wikiRes;
            });

      }

      searchWiki() {
        // https://www.mediawiki.org/wiki/API:Tutorial
        //let wikiurl = 'http://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=images';
        let wikiurl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        params.set('search', 'Color theory'); // user's search value.
        params.set('action', 'opensearch');
        params.set('prop', 'revisions');
        params.set('rvprop', 'content');
        params.set('format', 'json');
        params.set('limit', '10' );
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(wikiurl, { search: params } )
            .map( (res) => {
              const wikiRes = res.json();
              //console.log('wikiRes ', wikiRes);
              return wikiRes;
            });

          }




}
