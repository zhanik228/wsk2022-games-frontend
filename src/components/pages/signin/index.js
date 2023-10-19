import { useEffect, useState } from "react";
import Input from "../../atoms/input";
import axios from "axios";
import instance from "../../../axios/axiosInstance";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const onUsernameInput = (callback) => {
        setUserData({...userData, username: callback.target.value})
    }

    const onPasswordInput = (callback) => {
        setUserData({...userData, password: callback.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log('submit')
        try {
            const response = await instance.post('auth/signin', {
                'username': userData.username,
                'password': userData.password
            })
            localStorage.setItem('username', userData.username)
            localStorage.setItem('token', response.data.token)
            navigate(0)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="
            d-flex 
            align-items-center 
            justify-content-center
            fullScreen
        ">
            <section
                className="
                    w-25
                    d-flex 
                    flex-column
                    align-items-center 
                    justify-content-center
                    bg-light
                    rounded
                    p-4
                "
            >
                <h2>Sign In</h2>
                <form
                    className="w-100"
                    onSubmit={onSubmit}
                >
                <Input 
                    className="my-2"
                    placeholder="Username"
                    onInput={onUsernameInput}
                    value={userData.username}
                />
                <Input 
                    className="my-2"
                    placeholder="Password"
                    onInput={onPasswordInput}
                    value={userData.password}
                />
                <div
                    className="
                        w-100
                        d-flex
                        justify-content-between
                    "
                >
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <button
                        className="btn btn-secondary"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
                </form>
            </section>
        </main>
    )
}

export default SignInPage;