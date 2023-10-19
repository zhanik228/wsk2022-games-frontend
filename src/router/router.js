import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import SignUpPage from "../components/pages/signup"
import GamesPage from "../components/pages/games"
import SignOutPage from "../components/pages/signout"
import SignInPage from "../components/pages/signin"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/signup',
                element: <SignUpPage />
            },
            {
                path: '/',
                element: <GamesPage />
            },
            {
                path: '/signout',
                element: <SignOutPage />
            },
            {
                path: '/signin',
                element: <SignInPage />
            }
        ]
    }
])

export default router