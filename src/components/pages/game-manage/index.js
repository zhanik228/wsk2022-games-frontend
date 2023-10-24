import { useParams } from "react-router-dom"
import useGameFetch from "../../../hooks/useGameFetch"
import Card from "../../molecules/card"

const GameManage = () => {
    const params = useParams()
    const slug = params.slug
    const game = useGameFetch(slug)

    return (
        <main
            className="container"
        >
            <Card isEditing={true} card={game.game} />
            <button
                className="btn btn-primary"
            >
                Upload new version
            </button>
            <button
                className="btn btn-secondary"
            >
                Delete
            </button>
        </main>
    )
}

export default GameManage