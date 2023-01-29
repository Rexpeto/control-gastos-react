import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);

    return (
        <>
            <Header 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsvalidPresupuesto={setIsvalidPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
            />
            {isValidPresupuesto && (
                <div className="nuevo-gasto">
                    <img src={IconoNuevoGasto} alt="Nuevo gasto" />
                </div>
            )}
        </>
    );
}

export default App;
