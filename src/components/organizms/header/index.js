import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isAuthorized, setIsAuthorized] = useState(
        localStorage.getItem('token')
    )
    return (
        <header 
            className="
                d-flex 
                justify-content-between
                align-items-center
                border-bottom
                p-2
            "
        >
            <h1 className="position-relative h2 p-2 border">
                WorldSkills - Games
                <Link
                 to={'/'}   
                 className="
                    position-absolute 
                    top-0
                    start-0
                    bottom-0
                    end-0
                 "
                >
                </Link>
            </h1>
            {isAuthorized ?
            <div className="d-flex align-items-center">
                <span className="position-relative">
                    <Link
                        to={`profile/${localStorage.getItem('username')}`}   
                        className="
                           position-absolute 
                           top-0
                           start-0
                           bottom-0
                           end-0
                        "
                    >
                    </Link>
                    {localStorage.getItem('username')}
                </span>
                <button
                    className="btn position-relative"
                >
                    <Link
                        className="
                        position-absolute 
                        top-0
                        start-0
                        bottom-0
                        end-0
                        "
                        to={'/signout'}
                    >
                    </Link>
                        Sign Out
                </button>
            </div>
            
            : 
                <div className="flex">
                <button 
                    className="
                        position-relative 
                        btn 
                        btn-outline-primary 
                        mx-2
                    "
                >
                <Link
                 to={'/signup'}   
                 className="
                    position-absolute 
                    top-0
                    start-0
                    bottom-0
                    end-0
                 "
                >
                </Link>
                        Sign Up
                </button>
                <button 
                    className="
                        position-relative 
                        btn 
                        btn-outline-primary 
                        mx-2
                    "
                >
                <Link
                 to={'/signin'}   
                 className="
                    position-absolute 
                    top-0
                    start-0
                    bottom-0
                    end-0
                 "
                >
                </Link>
                    Sign In
                </button>
            </div>
            }
        </header>
    )
}

export default Header