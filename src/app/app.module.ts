import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing-module';

import { CollapseModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TributeComponent } from './tribute/tribute.component';
import { QuoteComponent } from './quote/quote.component';
import { WeatherComponent } from './weather/weather.component';
import { WikiComponent } from './wiki/wiki.component';
import { TwitchComponent } from './twitch/twitch.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { NavComponent } from './nav/nav.component';
import { SimonSaysComponent } from './simon-says/simon-says.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TributeComponent,
    QuoteComponent,
    WeatherComponent,
    WikiComponent,
    TwitchComponent,
    CalculatorComponent,
    ClockComponent,
    TicTacToeComponent,
    NavComponent,
    SimonSaysComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    CollapseModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
