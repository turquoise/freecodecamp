import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

import { AppRoutingModule } from './app-routing-module';

import {
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentExpansionPanelModule
} from '@covalent/core';
import { CollapseModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  MdCardModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdMenuModule,
  MdGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TributeComponent } from './tribute/tribute.component';
import { QuoteComponent } from './quote/quote.component';
import { WeatherComponent } from './weather/weather.component';
import { WikiComponent } from './wiki/wiki.component';
import { TwitchComponent } from './twitch/twitch.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { BoardComponent } from './tictactoe/board/board.component';
import { SquareComponent } from './tictactoe/square/square.component';
import { PomodoroClockComponent } from './pomodoro-clock/pomodoro-clock.component';
import { SimonsaysComponent } from './simonsays/simonsays.component';
import { NavComponent } from './nav/nav.component';


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
    TictactoeComponent,
    BoardComponent,
    SquareComponent,
    PomodoroClockComponent,
    SimonsaysComponent,
    NavComponent
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
    MdCardModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdMenuModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentExpansionPanelModule,
    MdGridListModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
