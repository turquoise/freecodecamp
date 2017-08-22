import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TributeComponent } from './tribute/tribute.component';
import { QuoteComponent } from './quote/quote.component';
import { WeatherComponent } from './weather/weather.component';
import { WikiComponent } from './wiki/wiki.component';
import { TwitchComponent } from './twitch/twitch.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TictactoeComponent  } from './tictactoe/tictactoe.component';
import { SimonSaysComponent } from './simon-says/simon-says.component';


const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tribute', component: TributeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'twitch', component: TwitchComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'simon-says', component: SimonSaysComponent },
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
