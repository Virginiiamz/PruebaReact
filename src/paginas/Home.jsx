import { Outlet } from "react-router";
import Menu from "../componentes/Menu";

function Home() {
    return(
        <>
            <Menu></Menu>
            <Outlet />
        </>
    );
}

export default Home;