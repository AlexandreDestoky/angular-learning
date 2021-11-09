import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  montant: number;
  tva: number;
  total: number;

  getValue(event: Event): number {
    return +(event.target as HTMLInputElement).value;
  }

  calcTotal() {
    if (!this.tva || !this.montant) return;
    this.total = +(this.montant * (1 + this.tva / 100)).toFixed(2);
  }

  calcHTVA() {
    if (!this.tva) return;
    this.montant = +(this.total * (100 / (100 + this.tva))).toFixed(2);
  }
}
