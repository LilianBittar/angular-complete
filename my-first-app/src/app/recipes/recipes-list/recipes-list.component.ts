import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 
    'https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg')
  ];

  constructor() {}

  ngOnInit(): void {
      
  }
}
