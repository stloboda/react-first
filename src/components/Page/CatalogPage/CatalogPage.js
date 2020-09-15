import React, {useEffect} from "react"
import CatalogList from "./CatalogList";
import classes from "./CatalogPage.module.css"


const CatalogPage = (props) => {
    const [catalogs, setCatalogs] = React.useState(
        [
            {id: 1, name: 'Stas'},
            {id: 2, name: 'Sas'},
            {id: 3, name: 'Sus'}
        ]
    )

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(catalogs =>
                setCatalogs(catalogs)
            )
    }, [])
    return (
        <div className={classes.catalog}>
            <CatalogList catalogs={catalogs}/>
        </div>

    )
}

export default CatalogPage