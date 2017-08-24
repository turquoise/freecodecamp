import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit, OnDestroy {

  private weatherSubscription: Subscription;
  private ipSubscription: Subscription;

  celsius: boolean = false;
  weatherData;
  temp;
  tempF;
  tempC;
  geoip;
  country;
  city;
  lat;
  long;
  icon;
  f;
  c;
  iconUrl;
  icons;

  thunder: boolean = false;
  drizzle: boolean = false;
  rain: boolean = false;
  snow: boolean = false;
  fog: boolean = false;
  clear: boolean = false;
  cloudy: boolean = false;

  backgroundId = [299, 499, 599, 699, 799, 800, 801 ];

  // from kelvin to celcius subtract 273

  // up to 299 it is thunder storm
  // up to 499 it is drizzle between 299 and 499
  // from 499 to 599 it is rain.
  // up to 699 it is snow.
  // up to 799 it is fog.
  //just 800 it is clear sky.
  // anything over 801 is cloudy.
  // https://openweathermap.org/weather-conditions

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {

    this.getgeoip();
    this.weatherSubscription = this.weatherService.weatherDataChanged.subscribe(
      () => {
        this.weatherData = this.weatherService.getWeatherData();
        this.icon = this.weatherData.weather[0].icon;
        this.iconUrl = 'http://openweathermap.org/img/w/' + this.icon + '.png';
        this.temp = this.weatherData.main.temp;
        this.tempC = Math.round((this.temp - 32) * (5/9));
        this.tempF = Math.round(this.temp);
        //console.log('this.temp ', this.temp);
        //console.log('this.icon ', this.icon);
        //console.log('this.iconUrl ', this.iconUrl);
        //console.log('this.weatherData from component ', this.weatherData);
        let id = this.weatherData.weather[0].id;
        //let bgIndex;
        console.log('id ', id);
        //this.backgroundId.push(id);
        //console.log('backgroundId ', backgroundId);
        //bgIndex = this.backgroundId.sort().indexOf(id);
        //console.log('bgIndex ', bgIndex);
        //this.backgroundImage[bgIndex];
        //this.changeBackgroundImage(bgIndex);
        this.changeBackgroundImage(id);

      })

    }

    ngOnDestroy() {
      this.weatherSubscription.unsubscribe();
      this.ipSubscription.unsubscribe();
    }

    changeBackgroundImage(id) {
      if (id <= 299) {
        this.thunder = true;
      } else if (id > 299 && id <= 499) {
        this.drizzle = true;
      } else if (id > 499 && id <= 599) {
        this.rain = true;
      } else if (id > 599 && id <= 699) {
        this.snow = true;
      } else if (id > 699 && id <= 799) {
        this.fog = true;
      } else if (id === 800) {
        this.clear = true;
      } else if (id > 800) {
        this.cloudy = true;
      }
      // up to 299 it is thunder storm
      // up to 499 it is drizzle between 299 and 499
      // from 499 to 599 it is rain.
      // up to 699 it is snow.
      // up to 799 it is fog.
      //just 800 it is clear sky.
      // anything over 801 is cloudy.
    }

    onToggle() {
      this.celsius = !this.celsius;
      //console.log('this.celsius ', this.celsius
    }

  getgeoip() {
    this.ipSubscription = this.weatherService.getGeoip()
      .subscribe( res => {
        this.geoip = res;
        //console.log('this.geoip ', this.geoip);
        this.city = res.city;
        this.country = res.country.name;
        this.lat = res.location.latitude;
        this.long = res.location.longitude;
        //console.log('this.city ', this.city);
        //console.log('this.country ', this.country);
        //console.log('this.lat ', this.lat);
        //console.log('this.long ', this.long);
      })
  }

}
