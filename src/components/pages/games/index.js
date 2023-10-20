import { useEffect, useRef, useState, useCallback, forwardRef } from "react"
import Card from "../../molecules/card"
import CardList from "../../molecules/card-list"
import Sort from "../../molecules/sort/index"
import axios from "axios"
import instance from "../../../axios/axiosInstance"
import useGamesFetch from "../../../hooks/useGamesFetch"

const GamesPage = () => {
    const [query, setQuery] = useState({
        sortBy: 'popular',
        sortDir: 'asc',
        size: 10,
    })
    const [pageNumber, setPageNumber] = useState(0)
    const [selectedSort, setSelectedSort] = useState()

    const {
        games,
        hasMore,
        availableGames,
        loading,
        error
    } = useGamesFetch(query, pageNumber)
    
    const observer = useRef()
    const lastGameElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [loading, hasMore])

    const sortButtons = [
        'Popularity',
        'Recently Updated',
        'Alphabetically'
    ]

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
        setPageNumber(0)
        setQuery({...query, sortBy: sortName})
    }

    const onSortDirClick = (sortDir) => {
        setPageNumber(0)
        setQuery({...query, sortDir: sortDir})
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
                <CardList CardRef={lastGameElementRef} cards={games} />
                {loading && 
                    <div>'Loading...'</div>
                }
                {error && 
                    <div>'Error...'</div>
                }
            </section>
        </main>
    )
}

export default GamesPage