import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikiService {



  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) { }



  search(term: string) {
    let search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .map((request) => request.json()[1]);
  }

getWiki(term: string) {
  let wikiUrl = 'http://en.wikipdia.org/w/api.php';
  let params = new URLSearchParams();
  params.set('search', term);
  params.set('action', 'opensearch');
  params.set('format', 'json');
  params.set('callback', 'JSONP_CALLBACK');

  return this.jsonp.get(wikiUrl, { search: params})
      .map(res => <string[]> res.json()[1]);



}


}
