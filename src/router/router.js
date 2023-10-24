import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import SignUpPage from "../components/pages/signup"
import GamesPage from "../components/pages/games"
import SignOutPage from "../components/pages/signout"
import SignInPage from "../components/pages/signin"
import GamePage from "../components/pages/game"
import Profile from "../components/pages/profile"

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
            },
            {
                path: '/game/:slug',
                element: <GamePage />
            },
            {
                path: '/profile/:username',
                element: <Profile />
            }
        ]
    }
])

export default router