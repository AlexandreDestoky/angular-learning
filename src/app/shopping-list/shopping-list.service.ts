import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIng(): Ingredient[] {
    return [...this.ingredients];
  }

  addIng(Ing: Ingredient[]) {
    this.ingredients.push(...Ing);
    this.ingredientsChanged.emit(this.getIng());
  }
}
