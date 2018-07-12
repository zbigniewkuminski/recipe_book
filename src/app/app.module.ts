import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { Highlight } from './directives/highlight.directive';
import { AddRecipeService } from './service/add-recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ShoppingListComponent,
    NewRecipeComponent,
    Highlight
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AddRecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
