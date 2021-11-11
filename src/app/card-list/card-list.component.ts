import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card.modele';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() cards: Card[];
  @Output() cardSup = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteCard(index: number) {
    this.cardSup.emit(index);
  }
}
