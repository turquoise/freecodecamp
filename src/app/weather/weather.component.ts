import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {

  cityWeather;

  constructor(private weatherService: WeatherService) { }



  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather()
      .subscribe( result => {
        console.log('London weather', result);
        this.cityWeather = result;

      });

  }

}
