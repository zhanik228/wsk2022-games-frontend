import { useEffect, useState } from "react"
import instance from "../../../axios/axiosInstance"
import { useNavigate } from "react-router-dom"

const SignOutPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/ ')
            return
        }
        const signOut = async () => {
            try {
                const response = await instance.post('auth/signout',{}, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                if (response.data.status === 'success') {
                    localStorage.removeItem('username')
                    localStorage.removeItem('token')
                    navigate(0)
                }
            } catch (e) {
                console.error(e)
            }
        }
        signOut()
    }, [])
    return (
        <div
            className="
            fullScreen 
            d-flex 
            justify-content-center 
            align-items-center
            "
        >
            {isLoading ? 
            <div
                className="spinner-border"
            >
            </div>
            :
            <div className="">
                You have been successfully signed out
            </div>
            }
        </div>
    )
}

export default SignOutPage