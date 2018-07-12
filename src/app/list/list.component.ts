import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Input() featureTitle: string;

  constructor(private recipeService: AddRecipeService) {
   }

  ngOnInit() {
    this.recipes = this.recipeService.recipesArray;
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }
}
