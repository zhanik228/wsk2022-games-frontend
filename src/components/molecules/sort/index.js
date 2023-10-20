import { useEffect, useState } from "react"

const Sort = (props) => {
    const { onSortNameClick, onSortDirClick, selectedSort } = props
    const sortDirections = [
        'asc',
        'desc',
    ]
    const { 
        availableGames,
        sortBy,
    } = props
    
    const [convertedSortBy, setConvertedSortBy] = useState([])
    useEffect(() => {
        const convertSortNames = () => {
            sortBy.forEach((sortName, index) => {
                switch (selectedSort) {
                    case 'popular':
                        convertedSortBy.push(selectedSort)
                        break
                    case 'uploaddate':
                        convertedSortBy.push(selectedSort)
                        break
                    case 'title':
                        convertedSortBy.push(selectedSort)
                        break
                    default: break
                }
            });
        }
        convertSortNames()
    }, [selectedSort])
    return (
        <section
            className="d-flex justify-content-between section-margin"
        >
            <h1>Available Games: {availableGames}</h1>
            <div className="d-flex">
                {sortBy.map(sort => (
                    <button
                        key={sort}
                        className={`'
                            text-uppercase
                            btn
                            btn-outline-secondary
                            ${selectedSort === sort ?
                                'text-white'
                                : ''
                            }
                        `
                        }
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