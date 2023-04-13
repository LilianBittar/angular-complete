import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 
        'https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg'),
        new Recipe('A test recipe', 'This is simply a test',
        'https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&quality=85&auto=format&fit=max&s=4219f64fafe19d101f92e0eba0181f6a'),
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}