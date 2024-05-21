import { Link } from "react-router-dom"
import "../assets/styles/card.css"
import { useEffect, useState } from "react"

function Card () {

    const [cards, setData] = useState(null)

    useEffect(() => {
        fetch('/data/data.json')
        .then(response => response.json())
        .then(jsonData => {
            setData(jsonData)
            localStorage.setItem('storageCard', JSON.stringify(jsonData));
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error))
    }, [])

    return <>
    {cards &&
            cards.map(card => (
                <Link to={`/flat/${card.id}`} className="card-link" key={card.id}>
                    <div className="card" key={card.id}>
                        <img src={card.pictures[0]} />
                        <p> {card.title}</p>
                    </div>
                </Link>
        ))}
    </>

}

export default Card

// En cours méthode essayer la méthode avec les contextes pour transferer les donné d'une carte via un context 