import {NavLink} from "react-router-dom";

function Navbar() {


    return (
        <nav className={'flex flex-row justify-center items-center gap-10 bg-primary-dark border-b-primary-lighter border-b-2 py-5 mb-2 text-slate-500'}>
            <NavLink to={'/'} className={'hover:text-sky-500 transition'}>Basic Ingredients</NavLink>
            <NavLink to={'/cocktails/ingredient'} className={'hover:text-sky-500 transition'}>Back to Cocktails</NavLink>
        </nav>
    )
}
export default Navbar