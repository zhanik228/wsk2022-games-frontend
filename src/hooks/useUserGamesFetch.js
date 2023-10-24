import { useEffect, useState } from "react"
import instance from "../axios/axiosInstance"

export const useUserGamesFetch = (username, token) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userGames, setUserGames] = useState([])

    useEffect(() => {
        const userGames = async () => {
            setLoading(true)
            try {
                const response = await instance.get(`users/${username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response)
                setUserGames(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        userGames()
    }, [])

    return {
        loading,
        error,
        userGames
    }
}