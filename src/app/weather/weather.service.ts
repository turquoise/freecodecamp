import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  private APIKEY = '46f0d79940ce443ee80d2a76da8bcdb8';

  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) { }

  // https://openweathermap.org/api
  // https://gist.github.com/P1xt/6aca515e3a4c02756adf06e0ebe1c941


  getWeather() {

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${this.APIKEY}`)
      .map(res => {
        const result = res.json();
        return result;
      });

  }

  
}
