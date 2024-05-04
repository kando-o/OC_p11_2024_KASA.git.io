import { Link } from "react-router-dom"
import "../assets/styles/card.css"
import { useEffect, useState } from "react"

function Card () {

    const [cards, setData] = useState(null)

    useEffect(() => {
        fetch('./src/data/data.json')
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
                <Link to={`/flat?id=${card.id}&title=${card.title}&location=${card.location}&host=${card.host.name}`} className="card-link" key={card.id}>
                    <div className="card" key={card.id}>
                        <p> {card.title}</p>
                    </div>
                </Link>
        ))}
    </>

}

export default Card

// En cours méthode essayer la méthode avec les contextes pour transferer les donné d'une carte via un context 