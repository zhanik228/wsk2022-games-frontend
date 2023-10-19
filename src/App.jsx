import { Outlet } from "react-router-dom"
import Header from "./components/organizms/header"

const App = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default App