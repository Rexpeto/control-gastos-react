import { formatearFecha } from "../helpers";

//? Iconos
import iconoAhorro from '../assets/img/icono_ahorro.svg';
import iconoCasa from '../assets/img/icono_casa.svg';
import iconoComida from '../assets/img/icono_comida.svg';
import iconoGastos from '../assets/img/icono_gastos.svg';
import iconoSalud from '../assets/img/icono_salud.svg';
import iconoOcio from '../assets/img/icono_ocio.svg';
import iconoSuscripcion from '../assets/img/icono_suscripciones.svg';

const diccionarioIconos = {
    ahorro: iconoAhorro,
    comida: iconoComida,
    casa: iconoCasa,
    gastos: iconoGastos,
    ocio: iconoOcio,
    salud: iconoSalud,
    suscripciones: iconoSuscripcion
}

const Gasto = ({gasto}) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto;
    return ( 
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={diccionarioIconos[categoria]} alt={categoria} />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">Agregado el: <span>{formatearFecha(fecha)}</span></p>
                </div>
            </div>
            <p className="cantidad-gasto">${cantidad}</p>
        </div>
    );
}

export default Gasto;