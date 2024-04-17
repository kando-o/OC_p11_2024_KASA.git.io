import "../assets/styles/dropdown.css"
import { useEffect, useState } from "react"

function Dropdown () {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/src/data/data.json")
        .then(response => response.json())
        .then(jsonData => {
            console.log(setData(jsonData));
            console.log(data);
            setData(jsonData)
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error))
    }, [])

    const [ selectionOption, setselectionOption] = useState('')

    const handlChangeSelectOption = (event) => {
        setselectionOption(event.target.value)
    }

    return <>
        <div className="dropdown">
            {data && (
                <>
                <select value={selectionOption} name="dropdown" id="containerdropdown" onChange={handlChangeSelectOption}>
                    {data.map(item => (
                        <option key={item.title} value={item.title}>{item.title}</option>
                    ))}
                </select>
                <p>Option sélectionné : {selectionOption}</p>
                </>
                // Fiabilité
                // Respect
                // Service
                // Sécurité
            )}
        </div>

        <div>
            {/* Afficher les données récupérées */}
            {data && (
                <>
                
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                </>
            )}
        </div>
    </>
}

export default Dropdown