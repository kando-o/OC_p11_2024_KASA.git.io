import "../assets/styles/a_propos.css"
import Dropdown from "../../../components/dropdown/views/dropdown";
import { useEffect, useState } from "react"


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
    console.log("propos");
    return <>
        { dataProp &&
            <Dropdown dataProp = {dataProp}></Dropdown >
        }
    </>
}

export default Propos
