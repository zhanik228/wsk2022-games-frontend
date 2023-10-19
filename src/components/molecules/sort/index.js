
const Sort = (props) => {
    const { onSortNameClick, onSortDirClick } = props
    const sortDirections = [
        'asc',
        'desc',
    ]
    const { 
        availableGames,
        sortBy,
    } = props
    return (
        <section
            className="d-flex justify-content-between section-margin"
        >
            <h1>Available Games: {availableGames}</h1>
            <div className="d-flex">
                {sortBy.map(sort => (
                    <button
                        key={sort}
                        className="
                            text-uppercase
                            btn
                            btn-outline-secondary
                        "
                        onClick={() => onSortNameClick(sort)}
                    >
                        {sort}
                    </button>
                ))}
            </div>
            <div className="d-flex">
                {sortDirections.map(direction => (
                    <button
                        key={direction}
                        className="
                            text-uppercase
                            btn
                            btn-outline-secondary
                        "
                        onClick={() => onSortDirClick(direction)}
                    >
                        {direction}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Sort