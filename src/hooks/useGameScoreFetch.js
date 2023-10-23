import React, { useEffect, useState } from "react";
import instance from "../axios/axiosInstance";

export default function useGameScoreFetch(query, slug) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [scores, setScores] = useState([])
    console.log(slug)

    useEffect(() => {
        setScores([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        const getScores = async () => {
            try {
                const response = await instance.get(`games/${slug}/scores`)
                setScores(response.data)
                setLoading(false)
                console.log(response)
            } catch (error) {
                console.error(error)
                setError(true)
            }
        }
        setInterval(() => {
            getScores()
        }, 5000);
    }, [query, slug])
    return { loading, error, scores }
}