import React, { useEffect, useState } from "react";
import instance from "../axios/axiosInstance";

export default function useDeleteGame(slug) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [game, setGame] = useState(null)

    useEffect(() => {
        setLoading(true)
        const getGames = async () => {
            try {
                const response = await instance.delete(`games/${slug}`)
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