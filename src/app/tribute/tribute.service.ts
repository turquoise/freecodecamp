import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class TributeService {

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  // redirect_url = 'http://localhost:4200/tribute';

  constructor(private http: Http) {}

  

}
