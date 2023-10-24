import { useEffect, useState } from "react"
import instance from "../axios/axiosInstance"

export const usePostScores = (slug, score, token) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const postScore = async () => {
            const response = await instance.post(`games/${slug}/scores`, {
                score
            }, 
            {
                headers: {
                    'Authorization': `Bearer `
                }
            })
            console.log(response)
        }
        postScore()
    }, [])

    return {
        loading,
        error
    }
}