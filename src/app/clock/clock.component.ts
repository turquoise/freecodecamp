import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  buzzer = 'https://notificationsounds.com/soundfiles/b337e84de8752b27eda3a12363109e80/file-sounds-913-served.mp3';
  count = 5;
  count2 = 5;
  playBuzzer: boolean = false;
  showButton: boolean = false;
  minutes = 5;
  seconds = 0;
  minutes2;
  seconds2;

  constructor() { }

  // https://notificationsounds.com/notification-
  // parseInt(string, radix);

  ngOnInit() {

  }

  onReset() {
    this.count = 5;
    this.count2 = 5;
    this.playBuzzer = false;
  }

  onStart() {
    this.count *= 60;
    this.count -= 1;
    if (this.count % 60 >= 10 ) {
      this.minutes  = Math.floor(this.count / 60);
      //this.seconds = Math.floor(this.minutes % 60);
    }

    // timer
    let counter = setInterval( () => {

      // hide - start button m5time, m5break, a5break, title1, reset
      //this.showButton = false;
      this.minutes -= 1;
      //this.seconds -= 1;
      if (this.minutes === 0) {
        this.playBuzzer = true;
        clearInterval(counter);
        this.showButton = true;
      }
    }, 1000);

    // this.showButton = true;
    // this.count2 *= 60;
    // this.count2 -= 1;
    // if (this.count2 % 60 >= 10) {
    //   this.minutes2 = Math.floor(this.count2/60);
    //   this.seconds2 = Math.floor(this.minutes % 60);
    // }
    //
    // // breaktimer
    // let counter2 = setInterval( () => {
    //   // show breaktimer -
    //
    //   this.minutes -= 1;
    //
    //   if (this.count2 === 0) {
    //     clearInterval(counter2);
    //     this.playBuzzer = true;
    //     this.showButton = true;
    //   }
    // });
    counter;
  }

  minusSession() {
    if (this.count > 0) {
      this.count -= 5;
    }
  }

  addSession() {
    this.count += 5;
  }

  minusBreak() {
    if (this.count2 > 0) {
      this.count2 -= 5;
    }
  }

  addBreak() {
    this.count2 += 5;
  }


}
