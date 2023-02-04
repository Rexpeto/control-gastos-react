import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'

function App() {
    const [gastos, setGastos] = useState(
        localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
    );
    const [presupuesto, setPresupuesto] = useState(
        Number(localStorage.getItem('presupuesto')) ?? 0
    );
    const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [gastoEditar, setGastoEditar] = useState({});

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            setModal(true);
        

            setTimeout(() => {
                setAnimarModal(true);
            }, 200);
        }

    }, [gastoEditar]);

    useEffect(() => {
        localStorage.setItem('presupuesto', presupuesto ?? 0);
    }, [presupuesto]);

    useEffect(() => {
        localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
    }, [gastos]);

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0);

        if(presupuestoLS > 0) {
            setIsvalidPresupuesto(true);
        }
    }, []);

    const handleNuevoGasto = () => {
        setModal(true);
        setGastoEditar({});

        setTimeout(() => {
            setAnimarModal(true);
        }, 200);
    }

    //? Nuevo gasto
    const guardarGasto = gasto => {
        
        if(gasto.id) {
            const gastosActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);

            setGastos(gastosActualizado);
            setGastoEditar({});
        } else {
            gasto.id = generarId();
            gasto.fecha = Date.now();
            
            setGastos([...gastos, gasto]);
        }

        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 300);
    }

    //? Eliminar gasto
    const eliminarGasto = id => {
        const gastoActualizado = gastos.filter(gasto => gasto.id !== id);

        setGastos(gastoActualizado);
    }

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header 
                gastos={gastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsvalidPresupuesto={setIsvalidPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
            />
            {isValidPresupuesto && (
                <>
                    <main>
                        <ListadoGastos 
                            gastos={gastos}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    </main>
                    <div className="nuevo-gasto">
                        <img 
                            src={IconoNuevoGasto} 
                            alt="Nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>
            )}

            {modal && (
                <Modal 
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                />
            )}
        </div>
    );
}

export default App;
