import React, { useState } from 'react'

export const AñadirCategoria = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One punch');
    const onInputChange = (event)=>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim().length <=1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
