import Gasto from "./Gasto";

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return ( 
        <div className="listado-gastos contenedor">
            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : `No hay gastos en la categoría ${filtro}`}</h2>
                        {gastosFiltrados.map(gastos => (
                            <Gasto
                                key={gastos.id}
                                gasto={gastos}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}

                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                        {gastos.map(gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
                
            }
        </div>
    );
}

export default ListadoGastos;