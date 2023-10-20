import { useParams } from "react-router-dom"
import useGamesFetch from "../../../hooks/useGamesFetch"
import useGameFetch from "../../../hooks/useGameFetch"

const GamePage = () => {
    const params = useParams()
    const game = useGameFetch(params.slug)
    console.log(game)

    return (
        <main className="container">
            <h2>{game.game.slug}</h2>
        </main>
    )
}

export default GamePage