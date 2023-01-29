const ControlPresupuesto = ({presupuesto}) => {
    return ( 
        <div className="contenedor-presupuesto sombra contenedor dos-columnas">
            <div>
                <p>Graficas aquí</p>
            </div>

            <div className="contenido-presupuesto">
                <p><span>Presupuesto:</span> ${presupuesto}</p>
            </div>
        </div>
    );
}

export default ControlPresupuesto;