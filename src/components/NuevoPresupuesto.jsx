const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="presupuesto">Definir Presupuesto</label>
                    <input className="nuevo-presupuesto" type="text" name="presupuesto" id="presupuesto" value={presupuesto} onChange={e => setPresupuesto(e.target.value)}/>
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    );
}

export default NuevoPresupuesto;