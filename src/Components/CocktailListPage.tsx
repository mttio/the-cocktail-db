import DrinkCard from "./DrinkCard.tsx";
import {useLoaderData} from "react-router-dom";

interface cocktail {
    strDrink: string;
    strDrinkThumb: string;
}


function CocktailListPage () {
    const cocktails = useLoaderData()

    return (

    <>
        <div className={'grid grid-cols-1 gap-0 max-w-6xl md:grid-cols-2 lg:grid-cols-3'}>
            {cocktails.map((cocktail: cocktail) => {
                return (
                    <DrinkCard drinkname={cocktail.strDrink} thumburl={cocktail.strDrinkThumb} key={cocktail.strDrink}/>
                )
            })}
        </div>
    </>
)
}

export default CocktailListPage