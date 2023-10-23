import { useParams } from "react-router-dom"
import useGamesFetch from "../../../hooks/useGamesFetch"
import useGameFetch from "../../../hooks/useGameFetch"
import useGameScoreFetch from "../../../hooks/useGameScoreFetch"
import { useEffect } from "react"
import { useFrameFetch } from "../../../hooks/useFrameFetch"

const GamePage = () => {
    const params = useParams()
    const game = useGameFetch(params.slug)
    const scores = useGameScoreFetch('', params.slug)
    const frame = useFrameFetch(params.slug)
    console.log(frame)

    // useEffect(() => {
    //     let xhr = new XMLHttpRequest()
    // }, [])

    return (
        <main className="container">
            <h2 className="section-margin">{game.game.slug}</h2>
            <iframe id="frame_id" src={`http://localhost:8000/games/${game.game.slug}`} ></iframe>
            <div className="flex justify-between">
                <div className="w-50 px-2">
                    <h2>Top 10 Leaderboard</h2>
                    {scores.scores.map((score, index) => {
                    if (score.username === 'player1') {
                        return <p
                        className="flex justify-between"
                        key={score.score}>
                        <span>you: {index + 1} {score.username}</span>
                        <span className="align-self-end">{score.score}</span>
                    </p>
                    }
                    return <p
                        className="flex justify-between"
                        key={score.score}>
                        <span># {index + 1} {score.username}</span>
                        <span className="align-self-end">{score.score}</span>
                    </p>
                    })}
                    {scores.scores.map((score, index) => {
                        if (score.username === 'player1') {
                            return (
                                <h2>{score.username}</h2>
                            )
                        }
                    })}
                </div>
                <div className="w-50 px-2">
                    <h2>Description</h2>
                    <p>{game.game.description}</p>
                </div>
            </div>
        </main>
    )
}

export default GamePage