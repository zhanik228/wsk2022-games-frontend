import { Link, useParams } from "react-router-dom"
import useGamesFetch from "../../../hooks/useGamesFetch"
import useGameFetch from "../../../hooks/useGameFetch"
import useGameScoreFetch from "../../../hooks/useGameScoreFetch"
import { useEffect, useState } from "react"
import { useFrameFetch } from "../../../hooks/useFrameFetch"
import Modal from "../../molecules/modal"
import { usePostScores } from "../../../hooks/usePostScores"
import instance from "../../../axios/axiosInstance"

const GamePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [postScore, setPostScore] = useState(0)
    const params = useParams()
    const game = useGameFetch(params.slug)
    const scores = useGameScoreFetch('', params.slug)
    const frame = useFrameFetch(params.slug)

    const closeModal = (callback) => {
        setIsOpen(callback)
    }

    const submitModal = (callback) => {
        const postScores = async () => {
            try {
                const token = localStorage.getItem('token')
                const response = await instance.post(
                    `games/${params.slug}/scores`,
                    {
                        score: postScore
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        postScores()
        setIsOpen(false)
    }

    useEffect(() => {
        const frameDoc = document.getElementById('frame_id')
        if (frame.loading) {
            frameDoc.setAttribute('srcDoc', '')
        }
        else if (frame.error) {
            frameDoc.setAttribute('srcDoc', frame.error)
        }
        else if (frame.frame) {
            frameDoc.setAttribute('srcDoc', frame.frame)
        }

        const watchFrameMessage = (event) => {
            const message = event.data

            if (message.event_type === 'game_run_end') {
                setIsOpen(true)
                setPostScore(message.score)
            }
        }

        window.addEventListener('message', watchFrameMessage)

        return () => {
            window.removeEventListener('message', watchFrameMessage)
        }
    }, [frame.frame])

    return (
        <>
        <Modal isOpen={isOpen} close={closeModal} submit={submitModal}>
            Do ya wanna submit your scores?
        </Modal>
        <main className="container">
            <h2 className="section-margin">{game.game.slug}</h2>
            <iframe id="frame_id" srcDoc={``} ></iframe>
            <div className="flex justify-between">
                <div className="w-50 px-2">
                    <h2>Top 10 Leaderboard</h2>
                    {scores.scores.map((score, index) => {
                    if (score.username === localStorage.getItem('username')) {
                        return <p
                        className="flex justify-between"
                        key={score.score}>
                        <span>you: {index + 1} {score.username}</span>
                        <span className="align-self-end">{score.score}</span>
                    </p>
                    }
                    return <p
                        className="flex justify-between position-relative"
                        key={score.score}>
                            <Link
                                className="
                                position-absolute
                                top-0
                                right-0
                                bottom-0
                                left-0
                                w-100
                                "
                                to={`/profile/${score.username}`}
                            >
                            </Link>
                        <span># {index + 1} {score.username}</span>
                        <span className="align-self-end">{score.score}</span>
                    </p>
                    })}
                    {scores.scores.map((score, index) => {
                        if (score.username === localStorage.getItem('username')) {
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
        </>
    )
}

export default GamePage