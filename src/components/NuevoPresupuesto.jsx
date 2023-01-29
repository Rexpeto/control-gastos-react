import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('No es un número válido');
            setPresupuesto(0);
        }
    }

    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label htmlFor="presupuesto">Definir Presupuesto</label>
                    <input className="nuevo-presupuesto" type="text" name="presupuesto" id="presupuesto" value={presupuesto} onChange={e => setPresupuesto(e.target.value)}/>
                </div>
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    );
}

export default NuevoPresupuesto;