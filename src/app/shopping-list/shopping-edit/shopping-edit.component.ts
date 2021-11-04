import { Component, ElementRef, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() newIng = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addIngredients() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    this.newIng.emit(newIngredient);
  }
}
