import {createBrowserRouter, LoaderFunctionArgs} from 'react-router-dom'
import {getCocktailFromName, getCocktailsFromIngredient, getIngredients} from "../cocktailsApiMethods.ts";
import Template from "../Template.tsx";
import CocktailListPage from "../Components/CocktailListPage.tsx";
import IngredientsListPage from "../Components/IngredientsListPage.tsx";
import CocktailDetailPage from "../Components/CocktailDetailPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template/>,
        children: [
            {
                path: '',
                index: true,
                element: <IngredientsListPage/>,
                loader: async () => {
                    return await getIngredients()
                }
            },{
                path: 'cocktails/:ingredient',
                element: <CocktailListPage/>,
                loader: async ({params}: LoaderFunctionArgs) => {
                    return await getCocktailsFromIngredient(params.ingredient ? params.ingredient : '');
                }
            },{
                path: 'cocktails/details/:id',
                element: <CocktailDetailPage/>,
                loader: async ({params}: LoaderFunctionArgs) => {
                    return await getCocktailFromName(params.id!);
                }
            }
        ],
        errorElement: (<div className={'flex flex-col justify-center items-center h-screen'}><h1 className={'font-bold text-6xl text-center mb-2'}>404 Not Found</h1><p className={'text-slate-400'}>The page you are looking for does not exist</p></div>)
    }
])

export default router