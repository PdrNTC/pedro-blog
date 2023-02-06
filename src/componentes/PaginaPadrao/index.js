import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao () {
    return (
        <main>
            <Banner/>

            <Outlet /> 
        {/* 
            Outlet serve para renderiziar as rotas aninhadas da pagina padrao.
        */}
        </main>
    )
}