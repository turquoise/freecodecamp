import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class WeatherService {

  APIKEY = '46f0d79940ce443ee80d2a76da8bcdb8';

  constructor(private http: Http) { }

  // https://openweathermap.org/api


  getWeather() {

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${this.APIKEY}`)
      .map(res => res.json());

  }

}
