import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

import { AppRoutingModule } from './app-routing-module';

import { CollapseModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdCardModule } from '@angular/material';


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
import { SimonSaysComponent } from './simon-says/simon-says.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';


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
    SimonSaysComponent,
    NavbarComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    CollapseModule,
    MaterialModule,
    MdCardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
