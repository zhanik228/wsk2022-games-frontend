import { useEffect, useState } from "react"
import instance from "../axios/axiosInstance"
import axios from "axios"

export const useFrameFetch = (slug) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [frame, setFrame] = useState()

    useEffect(() => {
        const getFrame = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`http://localhost:8000/games/${slug}`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control'
                    }
                })
                console.log(response)
                setFrame(response.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        getFrame()
    }, [slug])

    return {
        loading,
        error,
        frame
    }
}