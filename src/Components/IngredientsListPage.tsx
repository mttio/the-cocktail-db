import {useLoaderData} from "react-router-dom";
import IngredientCard from "./IngredientCard.tsx";

interface ingredient {
    strIngredient1: string;
}


function IngredientsListPage() {
    const ingredients = useLoaderData()

    return (
        <div className={'columns-1 gap-0 max-w-6xl md:columns-2 lg:columns-3'}>
            {ingredients.map((ingredient: ingredient) => {
                return (
                    <IngredientCard ingredientname={ingredient.strIngredient1} key={ingredient.strIngredient1}/>
                )
            })}
        </div>
    )
}

export default IngredientsListPage