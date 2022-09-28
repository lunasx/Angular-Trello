import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/Interface/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../cards.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() data?: ICard;
}
 