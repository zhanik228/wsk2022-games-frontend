import React from "react"
import Card from "../card"

const CardList = React.forwardRef(({cards, CardRef}, ref) => {

    return (
        <>
        <section className="section-margin">
            {cards.map((card, index) => {
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