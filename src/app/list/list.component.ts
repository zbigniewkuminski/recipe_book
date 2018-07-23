import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';
import { ServerServiceService } from 'src/app/service/server-service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements OnInit {
  recipes: Recipe[] = [];

  getRecipeTemp: Recipe[];

  recipePagination: Recipe[];
  recipesOnPage = 3;
  page = 1;
  numberOfPages = 1;
  recipeIndex = 0;

  constructor(private recipeService: AddRecipeService,
    private getRecipe: ServerServiceService) { }

  ngOnInit() {

    this.getRecipe.receiveRecipes()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      );
    this.numberOfPages = this.recipes.length / this.recipesOnPage;
    this.recipePagination = [];
    this.loadedRecipes();
  }

  deleteRecipe(id: number) {
    this.recipeIndex = ((this.page - 1) * this.recipesOnPage) + id;
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.numberOfPages = this.recipes.length / this.recipesOnPage;
    this.recipePagination = [];
    this.loadedRecipes();
  }

  prevPage() {
    this.page--;
    this.recipePagination = [];
    this.loadedRecipes();
  }

  nextPage() {
    this.page++;
    this.recipePagination = [];
    this.loadedRecipes();
  }

  loadedRecipes() { /* paginacja */
    this.recipes.forEach((recipe, index) => {
      if ((index >= ((this.page - 1) * this.recipesOnPage)) &&
        (index <= (this.page * this.recipesOnPage) - 1)) {
        this.recipePagination.push(recipe);
      }
    });
  }
}