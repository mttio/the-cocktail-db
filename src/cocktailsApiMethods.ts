//Search cocktail by name
export async function getCocktailFromName(name: string) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`);
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    const data = await response.json();
    return data.drinks[0];
}


//List all cocktails by first letter
export async function getCocktailsFromFirstLetter (letter: string) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${encodeURIComponent(letter)}`)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
}

//Search ingredient by name
export async function getIngredientsFromName (name: string) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
}

export async function getIngredients () {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
}

export async function getCocktailsFromIngredient (ingredient: string) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
}