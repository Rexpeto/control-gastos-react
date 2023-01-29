import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
    presupuesto,
    setPresupuesto,
    setIsvalidPresupuesto,
    isValidPresupuesto,
}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
                <p>Pasaste</p>
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
