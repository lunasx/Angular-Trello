import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/Interface/interface';

@Component({
  selector: 'app-card-completed',
  templateUrl: './card-completed.component.html',
  styleUrls: ['../../cards.scss']
})
export class CardCompletedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dataCompleted?: ICard;
}
 