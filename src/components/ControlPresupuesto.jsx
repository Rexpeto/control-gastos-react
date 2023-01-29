const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = cantidad => (
        cantidad.toLocaleString('en-US', {
            sytle: 'currenly',
            currency: 'USD'
        })
    );

    return ( 
        <div className="contenedor-presupuesto sombra contenedor dos-columnas">
            <div>
                <p>Graficas aquí</p>
            </div>

            <div className="contenido-presupuesto">
                <p><span>Presupuesto:</span> ${formatearCantidad(presupuesto)}</p>

                <p><span>Disponible:</span> ${formatearCantidad(0)}</p>

                <p><span>Gastado:</span> ${formatearCantidad(0)}</p>
            </div>
        </div>
    );
}

export default ControlPresupuesto;