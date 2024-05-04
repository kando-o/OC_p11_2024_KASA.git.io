import Dropdown from "../../../components/dropdown/views/dropdown"
import "../assets/styles/flat.css"
import PropTypes from 'prop-types'


function Flat () {
    Dropdown.propTypes = {
        title: PropTypes.string, 
    }

    const storageCard = localStorage.getItem("storageCard")
    const parseStorageCard = JSON.parse(storageCard)
    const urlParams = new URLSearchParams(window.location.search)
    const paramIdUrl = urlParams.get("id")

    const idUrl = parseStorageCard.filter(objet => objet.id === paramIdUrl )

    return <>
        { idUrl && idUrl.map((item, index) => (
            <div className="flat" key={index}>
                <div className="flat__info">
                    <div className="flat__infoFlat">
                        <h1 className="flat__title">{item.title}</h1>
                        <p className="flat__location">{item.location}</p>
                    </div>
                    <div className="flat__infoHost">
                        <p className="flat__name">{item.host.name}</p>
                        <div className="flat__pP"></div>
                    </div>
                </div>
                <div className="flat__tags">
                    {item.tags.map((tag, tagIndex) => (
                    
                        <p className="flatt__tagItems" key={tagIndex}>{tag}</p>
                    ))}
                </div>

                <div className="flat__dropDown">
                    <div className="flat__dropdownDescription">
                        {idUrl &&<Dropdown dataProp = {idUrl} title="Description"/>}<Dropdown />
                    </div>
                    <div className="flat__dropdownEquipement">
                    <Dropdown dataProp = {idUrl} title="Equipement"/><Dropdown />
                    </div>
                </div>
            </div>
        ))}
    </>

}

export default Flat
