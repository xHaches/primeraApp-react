

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {

    console.log({id, title, url})

    return (
        <Fragment>
            <div className="card animate__animated animate__fadeIn">
                <img src={ url } alt={ title }></img>
                <p>{ title }</p>
            </div>
        </Fragment>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
