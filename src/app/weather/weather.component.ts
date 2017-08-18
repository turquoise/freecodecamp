import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {

  cityWeather;
  // from kelvin to celcius subtract 273
  backgroundImages = [];
  ip = [];
  location = {}

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
    //this.getGeoIp(this.mylocation);
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log('position.coords ', position.coords);
      })
    }

  }

  // convertTemp() {
  //
  // }



  getWeather() {
    this.weatherService.getWeather()
      .subscribe( result => {
        console.log('London weather', result);
        this.cityWeather = result;
      })

  }

}
