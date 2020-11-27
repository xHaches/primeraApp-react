import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2) {
            // cats es el estado anterior
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>{ inputValue }</h1>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Nueva categoria"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
