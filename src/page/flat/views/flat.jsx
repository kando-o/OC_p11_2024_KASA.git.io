import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Layout from "../../../layouts/views/page"
import Collapser from "../../../components/collapser/views/collapser"
import Lightbox from "../../../components/lightbox/views/lightbox"
import Ratings from "../../../components/score/views/score"
import "../assets/styles/flat.css"

function Flat () {
    const navigate = useNavigate()
    const [ flat, setFlat ] =  useState(null)
    const { id } = useParams()

    useEffect(() => {
        const storageCard = localStorage.getItem("storageCard")
        if (!storageCard) {
            fetch('/data/data.json')
            .then(response => response.json())
            .then(jsonData => {
                localStorage.setItem('storageCard', JSON.stringify(jsonData));
                const temp = jsonData.find(objet => objet.id === id )
                if (!temp) {
                    navigate("/error")
                    return null
                }
                setFlat(jsonData)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error)
                navigate("/error")
                return null
            })
        } else {
            const parseStorageCard = JSON.parse(storageCard)
            const temp = parseStorageCard.find(objet => objet.id === id )
            if (!temp) {
                navigate("/error")
            }
            setFlat(temp)
        }
    }, [id, setFlat, navigate])

    if (!flat) return null
    return <Layout>
        <>
            <Lightbox photos = {flat.pictures} />

            <div className="flat">

                <div className="flat__info">

                    <div className="flat__info__flat">
                        {/* flat profile */}
                        <h1 className="flat__info__flat__title">{flat.title}</h1>
                        <p className="flat__info__flat__location">{flat.location}</p>

                        {/* tags */}
                        <div className="flat__info__flat__tags">
                            {flat.tags.map((tag, tagIndex) => (
                                <p className="flat__info__flat__tags__item" key={tagIndex}>{tag}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flat__info__host">
                        <div className="flat__info__host__score">
                            <Ratings score={+flat.rating} />
                        </div>
                        <div className="flat__info__host__user">
                            <p className="flat__info__host__user__name">{flat.host.name.split(" ").map((t,i)=><p key={"title-"+i+"-"+t}>{t}</p>)}</p>
                            <img className="flat__info__host__user__avatar" src={flat.host.picture} />
                        </div>
                    </div>
                </div>

                {/* collapsers */}
                <div className="flat__collapsers">
                    <Collapser title = "Description">
                        <p>{flat.description}</p>
                    </Collapser>
                    <Collapser title = "Equipement">
                        <>{flat.equipments.map((e,index)=><p key={`equip-${index}-${e}`}>{e}</p>)}</>
                    </Collapser>
                </div>
            </div>
        </>
    </Layout>
}

export default Flat
