import { useState } from "react";
import Header from "./components/Header";

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);

    return (
        <>
            <Header 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsvalidPresupuesto={setIsvalidPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
            />
        </>
    );
}

export default App;
