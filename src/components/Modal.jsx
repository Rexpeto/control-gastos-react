import Cerrar from '../assets/img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 300);
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
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
    );
}

export default Modal;