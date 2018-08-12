import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddRecipeService } from '../../service/add-recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeId: number;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: AddRecipeService) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id']
    this.recipe = this.recipeService.recipesArray[this.recipeId];
  }

}
