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
            </div>
        </div>
    );
}

export default ControlPresupuesto;