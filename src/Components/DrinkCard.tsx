import {useNavigate} from "react-router-dom";


interface cardProps {
    drinkname: string;
    thumburl: string;
}

function DrinkCard ({drinkname, thumburl}: cardProps) {
  const navigate = useNavigate()

  return (
    <div className={'inline-block bg-slate-800 shadow-md rounded-2xl overflow-hidden mx-3 my-2'}>
        <img src={thumburl} alt={drinkname} className={'w-full shadow-md'}/>
        <div className={'p-6'}>
            <h1 className={'font-bold text-3xl mb-3'}>{drinkname}</h1>
            <button onClick={()=>navigate('/cocktails/details/'+drinkname)} className={'bg-accent1 rounded-lg px-5 py-3 hover:bg-accent1-light transition shadow-lg active:bg-sky-200'}>Choose Drink</button>
        </div>
    </div>
  );
}

export default DrinkCard;