import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // http://brianflove.com/2017/05/03/responsive-angular/
  //public cols: number = 4;
  public cols: Observable<number>;

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
    //this.cols = 3;
    // set cols
     if (this.observableMedia.isActive("xs")) {
       this.cols = Observable.of(1);
     } else if (this.observableMedia.isActive("sm") || this.observableMedia.isActive("md")) {
       this.cols = Observable.of(3);
     } else if (this.observableMedia.isActive("lg") || this.observableMedia.isActive("xl")) {
       this.cols = Observable.of(3);
     }

     // observe changes
     this.observableMedia.asObservable()
     .subscribe(change => {
       switch (change.mqAlias) {
         case "xs":
           return this.cols = Observable.of(1);
         case "sm":
           return this.cols = Observable.of(2);
         case "md":
           return this.cols = Observable.of(3);
         case "lg":
         case "xl":
           return this.cols = Observable.of(3);
       }
     });
  }

}
