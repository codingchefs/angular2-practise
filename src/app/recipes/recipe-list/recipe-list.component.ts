import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy2', 'Dummy', 'http://murphsfamous.com/wp-content/uploads/2015/10/wings-one-recipe-thumbnail.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    debugger
      this.recipeSelected.emit(recipe);
  }

}
