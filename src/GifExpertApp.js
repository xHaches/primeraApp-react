import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Cats']);

    // const handleAdd = () => {
    //     setCategories(['Nueva Categoria', ...categories]);

            // cats es el estado anterior
    //     // setCategories( cats => [ 'Nueva Categoria', ...cats]);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                { categories.map(category => {
                    // key cuando se muestran etiquetas dinamicamente por medio de iterables, es obligatorio usar el key, y este debe ser unico.
                    // esto para optimizar y solo renderizar lo que ha cambiado
                    return <GifGrid key={ category } category={ category } />
                })}
            </ol>
        </Fragment>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
