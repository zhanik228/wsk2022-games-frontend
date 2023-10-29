import React, { useState } from "react"
import { Link } from "react-router-dom"
import useUpdateGame from "../../../hooks/useUpdateGame"

const Card = ({ card, CardRef, manage, isEditing }) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const updateGame = useUpdateGame(card.slug, title, description)

    useState(() => {
        setTitle(card.title)
        setDescription(card.description)
    }, [])

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    return (
        <>
        <div ref={CardRef} className="position-relative card border p-2">
        <Link
            className={`
            position-absolute 
            ${isEditing ? '' : "start-0 end-0 bottom-0 top-0"}`}
        to={'/game/'+ card.slug}></Link>
            <div className="d-flex justify-content-between p-2">
                {isEditing 
                ? <input value={title} onChange={onTitleChange} />
                : <h3>{card.title}</h3>
                }
                <p>#scores submitted: {card.scoreCount}</p>
                {manage && <Link
                    className="
                    z-2
                    "
                    to={`/game/manage/${card.slug}`}
                >manage</Link>}
            </div>
            <div className="d-flex">
                <img 
                    src={'http://localhost:8000' + card.thumbnail}
                    className="mx-2" 
                />
                {isEditing 
                ? <input value={description} onChange={onDescriptionChange} />
                : <h3>{card.title}</h3>
                }
            </div>
        </div>
        </>
    )
}

export default Card