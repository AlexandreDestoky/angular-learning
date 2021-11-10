import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tva = 0.06;
  date = new Date();
  prenom="alexandre";
  prenom2 = "patrick";
}
