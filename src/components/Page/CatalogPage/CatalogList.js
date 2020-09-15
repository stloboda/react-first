import React from "react";
import CatalogItem from "./CatalogItem";
import classes from "./CatalogList.module.css"

const CatalogList = (props) => {
    return (
        <ul className={classes.wrap}>
            {props.catalogs.map(catalog => {
                return <CatalogItem catalog={catalog} key={catalog.id}/>
            })}
        </ul>
    )
}

export default CatalogList