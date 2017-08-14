import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})
export class QuoteComponent implements OnInit, OnDestroy {

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
    // remove the subscription
  }

  getRandomQuote() {
    this.quoteService.getQuotesApi()
      .subscribe( result => {
        console.log('quote result ', result);
        this.randomQuote = result;
      });
  }

  onClick() {
    this.getRandomQuote();
  }



}
