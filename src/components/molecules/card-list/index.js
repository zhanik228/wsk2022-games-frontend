import Card from "../card"

const CardList = ({cards}) => {
    return (
        <section className="section-margin">
            {cards.map(card => (
                <Card key={card.slug} card={card} />
            ))
            }
        </section>
    )
}

export default CardList