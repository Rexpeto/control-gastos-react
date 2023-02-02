import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import Cerrar from '../assets/img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

    //? State de formulario
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');

    //? State de error
    const [mensaje, setMensaje] = useState('');

    //? useEffect de editar gasto
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            const {nombre, cantidad, categoria, id, fecha} = gastoEditar;

            setNombre(nombre);
            setCantidad(cantidad);
            setCategoria(categoria);
            setId(id);
            setFecha(fecha);
        }
    }, []);

    //? Handle de ocultar modal
    const ocultarModal = () => {
        setAnimarModal(false);
        setGastoEditar({});
        
        setTimeout(() => {
            setModal(false);
        }, 300);
    }

    //? HandleSubmit
    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios!!');
            return;
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha});
    }

    return ( 
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={Cerrar} 
                    alt="Boton cerrar"
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} onSubmit={handleSubmit}>
                <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input type="text" id='nombre' name='nombre' placeholder='Coloque el nombre del gasto' autoComplete='off' value={nombre} onChange={e => setNombre(e.target.value)}/>
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id='cantidad' name='cantidad' placeholder='Coloque la cantidad' autoComplete='off' value={cantidad} onChange={e => setCantidad(Number(e.target.value))}/>
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
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

                <input type="submit" value={gastoEditar.nombre ? 'Guardar cambios' : 'Añadir gasto'} />
            </form>
        </div>
    );
}

export default Modal;