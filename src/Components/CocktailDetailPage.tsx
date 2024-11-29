import {useLoaderData} from "react-router-dom";

interface cocktail {
    [key: string]: string | null;
}
interface ingredient {
    name: string;
    quantity: string;
}

function getIngredients(cocktail: cocktail): Array<ingredient> {
    const ingredients: Array<ingredient> = [];
    for (const key in cocktail) {
        if (key.startsWith("strIngredient") && cocktail[key]) {
            ingredients.push({
                name: cocktail[key] as string,
                quantity: cocktail[`strMeasure${key.slice(-1)}`] as string
            }) // Type assertion to ensure it's a string
        }
    }
    return ingredients;
}


function CocktailDetailPage() {
    const cocktail:cocktail = useLoaderData()

    return (
        <div className={'bg-slate-900 border-2 border-primary-lighter rounded-2xl overflow-hidden flex flex-col max-w-4xl md:flex-row'}>
            <img src={cocktail.strDrinkThumb || 'https://placehold.co/600x600'} className={'w-full md:w-1/2'}/>
            <div className={'p-6'}>
                <h1 className={'font-bold text-3xl mb-3'}>{cocktail.strDrink}</h1>
                <p className={'text-slate-400 mb-6'}>How to prepare: {cocktail.strInstructions}</p>
                <h2 className={'font-bold text-xl mb-3'}>Ingredients:</h2>
                <ul>
                    {getIngredients(cocktail).map((ingredient,index) => (
                        <li key={index} className={'list-disc ml-4 text-slate-400'}>{ingredient.name} - {ingredient.quantity}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CocktailDetailPage