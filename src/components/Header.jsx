import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    setIsvalidPresupuesto,
    isValidPresupuesto,
}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto 
                    presupuesto={presupuesto}
                    gastos={gastos}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsvalidPresupuesto={setIsvalidPresupuesto}
                    isValidPresupuesto={isValidPresupuesto}
                />
            )}
            
        </header>
    );
};

export default Header;
