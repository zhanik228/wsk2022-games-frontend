import React, { useEffect, useState } from "react";
import instance from "../axios/axiosInstance";
import axios, { AxiosError } from "axios";

export default function useUpdateGame(slug, title, description) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [game, setGame] = useState(null)

    useEffect(() => {
        setLoading(true)
        let cancel
        const getGames = async () => {
          const token = localStorage.getItem('token')
            try {
                const response = await instance.put(`games/${slug}`, {
                  title,
                  description,
                }, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                setGame(response.data)
                setLoading(false)
                console.log(response.data)
            } catch (error) {
                // if (axios.isCancel(error)) return
                console.error(error)
                setError(true)
            }
        }
        getGames()
    }, [title, description])
    return { loading, error }
}