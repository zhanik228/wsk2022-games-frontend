import React, { useEffect, useState } from "react";
import instance from "../axios/axiosInstance";

export default function useGameFetch(slug) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [game, setGame] = useState(null)

    useEffect(() => {
        
        const getGames = async () => {
            try {
                setLoading(true)
                const response = await instance.get(`games/${slug}`)
                setGame(response.data)
                setLoading(false)
                console.log(response.data)
            } catch (error) {
                console.error(error)
                setError(true)
            }
        }
        getGames()
    }, [])
    return { loading, error, game}
}