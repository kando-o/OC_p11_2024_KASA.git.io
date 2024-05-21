import { useState, useEffect } from "react"
import Layout from "../../../layouts/views/page"
import Collapser from "../../../components/collapser/views/collapser"
import Banner from "../../../components/banner/views/banner"

import "../assets/styles/about.css"

function Propos () {

    const [dataProp, setDataPropo] = useState(null)

    useEffect(() => {
        fetch("/data/about.json")
        .then(response => response.json())
        .then(jsonData => {
            setDataPropo(jsonData)
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error))

    }, [])

    if (!dataProp) return null

    return <Layout>
        <div className = "about">
            <Banner imageUrl="/assets/paysage_montagne.jpg" />
            <div className="propos">
                {dataProp.map(item => (
                    <Collapser title = {item.title} key = {item.id}>
                        <p>{item.text}</p>
                    </Collapser>)
                )}
            </div>
        </div>
    </Layout>
}

export default Propos