import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test", "Test description", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"),
    new Recipe("B test", "Test description 2", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272")
  ];
  @Output() selectedRecipeFromList = new EventEmitter<Recipe>();

  constructor () { }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeFromList.emit(recipe)
  }

  ngOnInit(): void {
  }

}
