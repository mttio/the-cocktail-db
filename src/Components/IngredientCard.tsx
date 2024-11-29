import {useNavigate} from "react-router-dom";


interface cardProps {
    ingredientname: string;
}

function IngredientCard ({ingredientname}: cardProps) {
    const navigate = useNavigate();

    return (
        <div className={'inline-block bg-slate-800 shadow-md rounded-2xl overflow-hidden mx-3 my-2 border-2 border-primary-lighter'}>
            <div className={'w-full aspect-square flex justify-center items-center border-b-2 border-b-primary-lighter bg-slate-900'}>
                <img onClick={()=>navigate('/cocktails/'+ingredientname)} src={`https://www.thecocktaildb.com/images/ingredients/${ingredientname}.png`} alt={ingredientname} className={'w-5/6 hover:scale-105 hover:cursor-pointer transition-transform'}/>
            </div>
            <div className={'p-6 flex flex-col items-center shadow-2xl'}>
                <h1 className={'font-bold text-3xl mb-3'}>{ingredientname}</h1>
                <button onClick={()=>navigate('/cocktails/'+ingredientname)} className={'bg-accent1 rounded-lg px-5 py-3 hover:bg-accent1-light transition shadow-lg active:bg-sky-200'}>Choose Ingredient</button>
            </div>
        </div>
    );
}

export default IngredientCard;