import React from "react"

const Card = ({ card, CardRef }) => {
    return (
        <div ref={CardRef} className=" card border p-2">
            <div className="d-flex justify-content-between p-2">
                <h3 className="align-self-end">{card.title}</h3>
                <p>#scores submitted: {card.scoreCount}</p>
            </div>
            <div className="d-flex">
                <img 
                    src={'http://localhost:8000' + card.thumbnail}
                    className="mx-2" 
                />
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default Card