import { useParams } from "react-router-dom"
import CardList from "../../molecules/card-list"
import { useUserGamesFetch } from "../../../hooks/useUserGamesFetch"

const Profile = () => {
    const params = useParams()
    const {
        username
    } = params
    const userInfo = useUserGamesFetch(username, localStorage.getItem('token'))
    const {
        loading,
        error,
        userGames
    } = userInfo
    if (userGames) {
        console.log(userGames.highscores)
    }

    return (
        <main className="container">
            <h2 className="section-margin">{username}</h2>
            <section>
                <h2>Authored Games</h2>
                {userGames &&
                    <CardList username={username} cards={userGames.authoredGames} />
                }
                <h2>Highscores</h2>
                {userGames && userGames.highscores &&
                    userGames.highscores.map((score) => (
                        <p><span>{score.game.title}</span><span>{score.score}</span></p>
                    ))
                }
            </section>
        </main>
    )
}

export default Profile