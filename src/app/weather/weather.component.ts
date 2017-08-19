import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {

  subscription: Subscription;

  celsius: boolean = false;
  weatherData;
  geoip;
  country;
  city;
  lat;
  long;
  icon;
  f;
  c;

  iconUrl;

  // from kelvin to celcius subtract 273
  backgroundImages = [
    { "299 thunder": "http://i3.somersetlive.co.uk/incoming/article75204.ece/ALTERNATES/s1200/Thunder.jpg"}, // up to 299 it is thunder storm
    { "499 drizzle": "https://c1.staticflickr.com/7/6191/6113430622_370016e5a9_z.jpg"}, // up to 499 it is drizzle between 299 and 499
    { "599 rain": "https://sites.psu.edu/siowfa16/files/2016/10/rain-generic_650x400_71457950721-1043ddi.jpg"}, // from 499 to 599 it is rain.
    { "699 snow": "http://media.phillyvoice.com/media/images/01282017_light_snow_on_roads_i.2e16d0ba.fill-1200x630-c0.jpg"}, // up to 699 it is snow.
    { "799 fog": ""}, // up to 799 it is fog.
    { "800 clear": ""}, //just 800 it is clear sky.
    { "801 cloudy": ""} // anything over 801 is cloudy.
  ];
  // https://openweathermap.org/weather-conditions
  icons;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {

    this.getgeoip();
    this.subscription = this.weatherService.weatherDataChanged.subscribe(
      () => {
        this.weatherData = this.weatherService.getWeatherData();
        this.icon = this.weatherData.weather[0].icon;
        this.iconUrl = 'http://openweathermap.org/img/w/' + this.icon + '.png';
        console.log('this.icon ', this.icon);
        console.log('this.iconUrl ', this.iconUrl);
        console.log('this.weatherData from component ', this.weatherData);
      })

    }


    onToggle() {
      this.celsius = !this.celsius;
      console.log('this.celsius ', this.celsius);
    }


  displayTemp(temp) {

    if (this.celsius) {
      this.c = Math.round( (temp-32) * (5/9)) + ' C';
      this.celsius = true;
      console.log('this.c ', this.c);
      return this.c;
    } else {
      this.f = Math.round(temp) + ' F';
      this.celsius = false;
      console.log('this.f ', this.f);
      return this.f;
    }
  }




  getgeoip() {
    this.weatherService.getGeoip()
      .subscribe( res => {
        this.geoip = res;
        console.log('this.geoip ', this.geoip);
        this.city = res.city;
        this.country = res.country.name;
        this.lat = res.location.latitude;
        this.long = res.location.longitude;
        console.log('this.city ', this.city);
        console.log('this.country ', this.country);
        console.log('this.lat ', this.lat);
        console.log('this.long ', this.long);
      })
  }

}
