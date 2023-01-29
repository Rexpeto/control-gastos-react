import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);

    const handleNuevoGasto = () => {
        setModal(true);
    }

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
                    <img 
                        src={IconoNuevoGasto} 
                        alt="Nuevo gasto"
                        onClick={handleNuevoGasto}
                    />
                </div>
            )}

            {modal && (<Modal setModal={setModal}/>)}
        </>
    );
}

export default App;
