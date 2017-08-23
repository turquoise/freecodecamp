import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TributeComponent } from './tribute/tribute.component';
import { QuoteComponent } from './quote/quote.component';
import { WeatherComponent } from './weather/weather.component';
import { WikiComponent } from './wiki/wiki.component';
import { TwitchComponent } from './twitch/twitch.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TictactoeComponent  } from './tictactoe/tictactoe.component';
import { SimonsaysComponent } from './simonsays/simonsays.component';
import { PomodoroClockComponent } from './pomodoro-clock/pomodoro-clock.component';


const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tribute', component: TributeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'twitch', component: TwitchComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'pomodoro-clock', component: PomodoroClockComponent },
  { path: 'tic-tac-toe', component: TictactoeComponent },
  { path: 'simon-says', component: SimonsaysComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
