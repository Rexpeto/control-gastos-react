import { useState, useEffect } from "react";

const Filtros = ({setFiltro, filtro}) => {
    return ( 
        <div className="filtros sombra contenedor">
            <form >
                <div className="campo">
                    <label htmlFor="categoria">Filtrar por Categoría</label>
                    <select name="categoria" id="categoria" value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Filtros;