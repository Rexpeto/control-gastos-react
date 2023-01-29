import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsvalidPresupuesto,
    isValidPresupuesto,
}) => {
    const [mensaje, setMensaje] = useState("");

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje("No es un número válido");
            return;
        }
        setMensaje("");
        setIsvalidPresupuesto(true);
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label htmlFor="presupuesto">Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        name="presupuesto"
                        id="presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    );
};

export default NuevoPresupuesto;
