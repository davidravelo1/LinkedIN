import Header from "../components/header/Header"
import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout