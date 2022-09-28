import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/Interface/interface';

@Component({
  selector: 'app-card-working',
  templateUrl: './card-working.component.html',
  styleUrls: ['../../cards.scss']
})
export class CardWorkingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() dataWorking?: ICard;
}
 