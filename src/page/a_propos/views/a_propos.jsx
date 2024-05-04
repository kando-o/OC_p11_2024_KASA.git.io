import "../styles/a_propos.css"
import { useState, useEffect } from "react"
import Dropdown from "../../../components/dropdown/views/dropdown"

function Propos () {

    const [dataProp, setDataPropo] = useState(null)

    useEffect(() => {
        fetch("/src/data/about.json")
        .then(response => response.json())
        .then(jsonData => {
            setDataPropo(jsonData)
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error))

    }, [])

    return <>
    
        <div className="propos">
        { dataProp && 
            <Dropdown dataProp = {dataProp} title = "" ></Dropdown >
        }
        </div>
    </>
}

export default Propos