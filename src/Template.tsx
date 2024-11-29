import {Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";

function Template() {
    return (
        <div>
            <Navbar/>

            <div className={'p-6'}>
                <section>
                    <div className={'flex flex-col justify-center items-center'}>

                        <h1 className={'font-bold text-5xl mb-3 text-center'}>The Cocktail Database</h1>
                        <p className={'mb-8 text-center text-slate-400'}>The ultimate cocktail database</p>

                    </div>
                </section>
                <section className={'flex justify-center items-center'}>
                    <Outlet/>
                </section>
            </div>
        </div>
    )
}

export default Template