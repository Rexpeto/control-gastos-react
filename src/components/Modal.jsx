import Cerrar from '../assets/img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setModal(false);
        setAnimarModal(false);
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
            <form className={`formulario ${animarModal && 'animar'}`}>
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
    );
}

export default Modal;