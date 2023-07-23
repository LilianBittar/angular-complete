


import { Ingredient } from "../../shared/ingredient.model";
import * as shoppingListActiopns from "./shopping-list.action";


const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]
};

export function shoppingListReducer(
    state = initialState, 
    action: shoppingListActiopns.ShoppingListActions
    ) {
    switch (action.type) {
        case shoppingListActiopns.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
            case shoppingListActiopns.ADD_INGREDIENTS:
                return {
                    ...state,
                    ingredients: [...state.ingredients, ...action.payload]
                };
            case shoppingListActiopns.UPDATE_INGREDIENT:
                const ingredient = state.ingredients[action.payload.index];
                const updatedIngredient = {
                    ...ingredient,
                    ...action.payload.ingredient
                };
                const updatedIngredients = [...state.ingredients];
                updatedIngredients[action.payload.index] = updatedIngredient;
                return {
                    ...state,
                    ingredients: updatedIngredients
                };
            case shoppingListActiopns.DELETE_INGREDIENT:
                return {
                    ...state,
                    ingredients: state.ingredients.filter((ig, igIndex) => {
                        return igIndex !== action.payload;
                    })
                };
        default:
            return state;
    }
}