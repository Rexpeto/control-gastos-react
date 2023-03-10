import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, setGastos, presupuesto, setPresupuesto, setIsvalidPresupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        //* Calcular el porcentaje
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        
        setGastado(totalGastado);
        setDisponible(totalDisponible);
        
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 300);

    }, [gastos]);

    const formatearCantidad = cantidad => (
        cantidad.toLocaleString('en-US', {
            sytle: 'currenly',
            currency: 'USD'
        })
    );

    const handleReset = () => {
        const resultado = confirm('¿Quieres reiniciar la app?');

        if(resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsvalidPresupuesto(false);
        }
    }

    return ( 
        <div className="contenedor-presupuesto sombra contenedor dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#dc2626" : '#3b82f6',
                        trailColor: "#f5f5f5"
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleReset}>Reiniciar App</button>
                <p><span>Presupuesto:</span> ${formatearCantidad(presupuesto)}</p>

                <p className={`${disponible < 0 ? 'negativo' : ''}`}><span>Disponible:</span> ${formatearCantidad(disponible)}</p>

                <p><span>Gastado:</span> ${formatearCantidad(gastado)}</p>
            </div>
        </div>
    );
}

export default ControlPresupuesto;