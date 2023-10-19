import { createRoot } from "react-dom/client"
import App from "./App"
import './_settings/global.css'
import './assets/bootstrap-5.3.2-dist/css/bootstrap.min.css'
import { RouterProvider } from "react-router-dom"
import router from "./router/router"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <RouterProvider router={router} />
)