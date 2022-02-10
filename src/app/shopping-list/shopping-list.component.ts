import { Component, OnInit } from '@angular/core'
import { Ingredient } from "../shared/ingredient.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Tomatoes", 3),
    new Ingredient("Potatoes", 5),
    new Ingredient("Watermelons", 12)
  ];
  constructor () { }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

  ngOnInit(): void {
  }

}
