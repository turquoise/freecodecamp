import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-clock',
  templateUrl: './pomodoro-clock.component.html',
  styleUrls: ['./pomodoro-clock.component.css']
})
export class PomodoroClockComponent implements OnInit {

  started = false;
  minutes = 25;
  seconds = 0;
  interval = null;
  minutesDom = null;
  secondsDom = null;
  fillerDom = null;
  fillerIncrement = 0;
  fillerHeight = 0;
  numLessThanTen = false;


  constructor() { }

  // https://appendto.com/2016/10/comparing-javascript-jquery-build-a-pomodoro-timer/

  ngOnInit() {
    this.onStart();
  }

  onStart() {
    this.minutesDom = this.minutes;
    this.secondsDom = this.toDoubleDigits(this.seconds);
  }

  onSetInterval() {
    this.interval = setInterval( () => {
      this.intervalCallback();
    }, 1000);
    //console.log('this.interval ', this.interval);
    return this.interval;
  }

  intervalCallback() {
    if(!this.started) {
      return false;
    }
    if (this.seconds === 0) {
      if (this.minutes === 0) {
        this.timerComplete();
        return false;
      } else {
        this.numLessThanTen = false;
        this.seconds = 59;
        this.minutes--;
      }
    } else {
      this.seconds--;
    }
    this.updateDom()
  }

  updateDom() {
    this.minutesDom = this.minutes;
    this.secondsDom = this.toDoubleDigits(this.seconds);
    //this.fillerHeight;
  }

  toDoubleDigits(seconds) {
    if (seconds < 10) {
      console.log('toDoubleDigits num ', '0' + seconds);
      this.numLessThanTen = true;
      return parseInt(seconds);
    }
    return parseInt(seconds);
  }

  timerComplete() {
    this.started = false;
    this.fillerHeight = 0;
  }

  onReset() {
    this.minutes = 0;
    this.seconds = 0;
    this.started = false;
  }

  onStartWork() {
    this.minutes = 25;
    this.seconds = 0;
    this.numLessThanTen = true;
    this.started = true;
    this.fillerIncrement = 200/(this.minutes* 60);
    this.fillerHeight = 0;
    this.onSetInterval();
  }


  onShortBreak() {
    this.minutes = 5;
    this.seconds = 0;
    this.numLessThanTen = true;
    this.started = true;
    this.fillerIncrement = 200/(this.minutes* 60);
    this.fillerHeight = 0;
    this.onSetInterval();
  }

  onLongBreak() {
    this.minutes = 15;
    this.seconds = 0;
    this.numLessThanTen = true;
    this.started = true;
    this.fillerIncrement = 200/(this.minutes* 60);
    this.fillerHeight = 0;
    this.onSetInterval();
  }

  onStopTimer() {
    this.minutes = 25;
    this.seconds = 0;
    this.started = false;
    this.fillerIncrement = 200/(this.minutes* 60);
    this.fillerHeight = 0;
    this.updateDom();
  }

}
