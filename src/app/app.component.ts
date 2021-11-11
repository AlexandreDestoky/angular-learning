import { Component } from '@angular/core';
import { Card } from './card.modele';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  films: Card[] = [
    {
      imgUrl: 'https://picsum.photos/id/237/200',
      prenom: 'David',
      nom: 'Chrish',
      note: 2,
      txt: 'Lorem Card 1ipsum dolor sit amet consectetur adipisicing elit. Enim saepe voluptas ad autem molestiae accusantium!',
    },
    {
      imgUrl: 'https://picsum.photos/id/236/200',
      prenom: 'Kristina',
      nom: 'Bellis',
      note: 3,
      txt: 'Lorem Card 2ipsum dolor sit amet consectetur adipisicing elit. Enim saepe voluptas ad autem molestiae accusantium!',
    },
    {
      imgUrl: 'https://picsum.photos/id/235/200',
      prenom: 'Stephen',
      nom: 'Mario',
      note: 4,
      txt: 'Lorem Card 3ipsum dolor sit amet consectetur adipisicing elit. Enim saepe voluptas ad autem molestiae accusantium!',
    },
  ];
  series: Card[] = [
    {
      imgUrl: 'https://picsum.photos/id/239/200',
      prenom: 'Shrek',
      nom: 'Bellis',
      note: 5,
      txt: 'Lorem Card 2ipsum dolor sit amet consectetur adipisicing elit. Enim saepe voluptas ad autem molestiae accusantium!',
    },
    {
      imgUrl: 'https://picsum.photos/id/225/200',
      prenom: 'Transformers',
      nom: 'Mario',
      note: 0,
      txt: 'Lorem Card 3ipsum dolor sit amet consectetur adipisicing elit. Enim saepe voluptas ad autem molestiae accusantium!',
    },
  ]
}
