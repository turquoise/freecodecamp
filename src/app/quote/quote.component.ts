import { Component, OnInit } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})
export class QuoteComponent implements OnInit {

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

  getRandomQuote() {
    this.quoteService.getQuotesApi()
      .subscribe( result => {
        console.log('result ', result);
        this.randomQuote = result;
      });
  }

  onClick() {
    this.getRandomQuote();
  }



}
