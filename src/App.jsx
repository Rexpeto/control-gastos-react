import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [gastos, setGastos] = useState([]);

    const handleNuevoGasto = () => {
        setModal(true);

        setTimeout(() => {
            setAnimarModal(true);
        }, 200);
    }

    //? Nuevo gasto
    const guardarGasto = gasto => {
        
        gasto.id = generarId();
        setGastos([...gastos, gasto]);

        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 300);
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

            {modal && (
                <Modal 
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                />
            )}
        </>
    );
}

export default App;
