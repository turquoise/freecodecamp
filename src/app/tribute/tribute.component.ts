import { Component, OnInit } from '@angular/core';
import { TributeService } from './tribute.service';

@Component({
  selector: 'app-tribute',
  templateUrl: './tribute.component.html',
  styleUrls: ['./tribute.component.css'],
  providers: [TributeService]
})
export class TributeComponent implements OnInit {

  searchStr: string;


  constructor(private tributeService: TributeService) { }

  ngOnInit() {
    this.getGoogleBooks();
  }

  getGoogleBooks() {
    this.tributeService.getGoogleBooks()
      .subscribe( res => console.log('tribute res ', res));
  }



}
