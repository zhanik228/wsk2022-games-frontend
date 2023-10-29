import { useParams } from "react-router-dom"
import useGameFetch from "../../../hooks/useGameFetch"
import Card from "../../molecules/card"
import useDeleteGame from "../../../hooks/useDeleteGame"
import instance from "../../../axios/axiosInstance"

const GameManage = () => {
    const params = useParams()
    const slug = params.slug
    const game = useGameFetch(slug)
    const token = localStorage.getItem('token')

    const deleteGame = async () => {
        const controller = new AbortController()
        try {
            const response = await instance.delete(`games/${slug}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const uploadGame = async (event) => {
        event.preventDefault()
        const files = event.target.files
        const lastFileIndex = event.target.files.length - 1
        const lastFile = files[lastFileIndex]

        const formdata = new FormData()
        formdata.append('zipfile', lastFile)
        formdata.append('token', token)

        console.log(formdata)

        try {
            const response = await instance.post(`games/${slug}/upload`, formdata)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main
            className="container"
        >
            {game.game &&
                <Card isEditing={true} card={game.game} />
            }
            <input
                type="file"
                className="btn btn-primary"
                onChange={uploadGame}
            />
            <button
                className="btn btn-secondary"
                onClick={deleteGame}
            >
                Delete
            </button>
        </main>
    )
}

export default GameManage