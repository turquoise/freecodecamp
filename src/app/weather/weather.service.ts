import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeatherService {


  weatherDataChanged = new Subject<any[]>();
  weatherData;
  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) { }

  // https://openweathermap.org/api
  // https://gist.github.com/P1xt/6aca515e3a4c02756adf06e0ebe1c941

  getWeatherData() {
    console.log('this.weatherData from the service ', this.weatherData);
    return this.weatherData;
  }


  getWeather(lat , lon) {
    let APIKEY = '46f0d79940ce443ee80d2a76da8bcdb8';
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${APIKEY}`)
      .map(response => response.json())
      //   const result = res.json();
        //console.log('result ', result);
        //return result;
      //})
      .subscribe( result => {
        console.log('this.weatherData', result);
        this.weatherData = result;
        this.weatherDataChanged.next();
        return this.weatherData;
      })

  }


  getGeoip() {
    return this.http.get('http://geoip.nekudo.com/api/')
      .map( result => {
        const resultIp = result.json();
        const lat = resultIp.location.latitude;
        const lon = resultIp.location.longitude;
        this.getWeather(lat, lon);
        console.log('resultIp ', resultIp);
        console.log('lat, lon ', lat, lon);
        return resultIp;

      })

  }

}
