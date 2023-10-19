import { useEffect, useState } from "react"
import Card from "../../molecules/card"
import CardList from "../../molecules/card-list"
import Sort from "../../molecules/sort/index"
import axios from "axios"
import instance from "../../../axios/axiosInstance"

const GamesPage = () => {
    const [games, setGames] = useState([])
    const [availableGames, setAvailableGames] = useState(0)
    const [sortBy, setSortBy] = useState('popular')
    const [sortDir, setSortDir] = useState('asc')
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [loadNewCards, setLoadNewCards] = useState(false)

    const sortButtons = [
        'Popularity',
        'Recently Updated',
        'Alphabetically'
    ]

    useEffect(() => {
        const lastCardObserver = new IntersectionObserver(entries => {
            const lastCard = entries[0]
            if (!lastCard.isIntersecting) return
            setLoadNewCards(!loadNewCards)
            lastCardObserver.unobserve(lastCard.target)
            return
        }, {})
        const lastGame = document.querySelector(".card:last-child")
        if (lastGame)
        lastCardObserver.observe(lastGame)
    }, [games])

    useEffect(() => {
        const loadGames = async () => {
            try {
                console.log(page)
                setPage(page => page+1 )
                const response = await instance('games', {
                    params: {
                        sortBy,
                        sortDir,
                        page: page+1,
                        size
                    }
                })
                console.log(response.data)
                setGames([...games, ...response.data.content])
            } catch (error) {
                console.error(error)
            }
        }
        loadGames()
    }, [loadNewCards])

    useEffect(() => {
        const getGames = async () => {
            try {
                setPage(0)
                const response = await instance('games', {
                    params: {
                        sortBy,
                        sortDir,
                        page,
                        size
                    }
                })
                console.log(response.data)
                setGames(response.data.content)
            } catch (error) {
                console.error(error)
            }
        }
        getGames()
    },[sortBy, sortDir])

    const onSortNameClick = (sortName) => {
        switch (sortName.toLowerCase()) {
            case 'popularity':
                sortName = 'popular'
                break
            case 'recently updated':
                sortName = 'uploaddate'
                break
            case 'alphabetically':
                sortName = 'title'
                break
        }
        setSortBy(sortName)
    }

    const onSortDirClick = (sortDir) => {
        setSortDir(sortDir)
    }

    return (
        <main className="py-4">
            <section
                className="container"
            >
                <Sort 
                    availableGames={availableGames}
                    sortBy={sortButtons}
                    onSortNameClick={onSortNameClick}
                    onSortDirClick={onSortDirClick}
                />
                <CardList cards={games} />
            </section>
        </main>
    )
}

export default GamesPage