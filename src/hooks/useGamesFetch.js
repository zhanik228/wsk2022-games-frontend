import React, { useEffect, useState } from "react";
import instance from "../axios/axiosInstance";

export default function useGamesFetch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [games, setGames] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [availableGames, setAvailableGames] = useState(0)

    useEffect(() => {
        setGames([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        const getGames = async () => {
            try {
                const response = await instance.get('games', {
                    params: {
                        ...query,
                        page: pageNumber
                    }
                })
                setGames(prevGames => {
                    return [...prevGames, ...response.data.content]
                })
                setHasMore(response.data.content.length > 0)
                setLoading(false)
                setAvailableGames(response.data.totalElements)
                console.log(response.data)
            } catch (error) {
                console.error(error)
                setError(true)
            }
        }
        getGames()
    }, [query, pageNumber])
    return { loading, error, games, hasMore, availableGames}
}