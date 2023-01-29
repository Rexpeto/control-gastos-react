const NuevoPresupuesto = () => {
    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="presupuesto">Definir Presupuesto</label>
                    <input className="nuevo-presupuesto" type="text" name="presupuesto" id="presupuesto"/>
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    );
}

export default NuevoPresupuesto;