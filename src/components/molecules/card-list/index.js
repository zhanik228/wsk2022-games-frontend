import React from "react"
import Card from "../card"

const CardList = React.forwardRef(({cards, CardRef, username}, ref) => {

    const loggedUsername = localStorage.getItem('username')
    return (
        <>
        <section className="section-margin">
            {cards && cards.length && cards.map((card, index) => {
                if (username === loggedUsername) {
                    return <Card manage={true} key={card.slug} card={card} />
                }
                if (cards.length === index + 1) {
                    return <Card CardRef={CardRef} key={card.slug} card={card} />
                } else {
                    return <Card key={card.slug} card={card} />
                }
            })
            }
        </section>
        </>
    )
})

export default CardList