import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})
export class QuoteComponent implements OnInit, OnDestroy {

  // https://tburleson-layouts-demos.firebaseapp.com/#/responsive
  // https://codepen.io/jaorsh/pen/OMRBmw
  // https://github.com/angular/flex-layout/wiki/ngClass-API

  private quoteSubscription: Subscription;

  quote: Quote;

  randomQuote: any;


  constructor(private quoteService: QuoteService) {
    quoteService.generateRandomQuotes(1000, (quote) => {
      this.quote = quote;
    });
  }

  ngOnInit() {
    this.getRandomQuote();
  }

  ngOnDestroy() {
    this.quoteSubscription.unsubscribe();
  }

  getRandomQuote() {
    this.quoteSubscription = this.quoteService.getQuotesApi()
      .subscribe( result => {
        console.log('quote result ', result);
        this.randomQuote = result;
      });
  }

  onClick() {
    this.getRandomQuote();
  }



}
