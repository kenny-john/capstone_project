import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

useEffect(()=>{
axios.get('http://localhost:3000/recipes').then(response=> {
  setRecipes(response.data)
})
},[])
  
  return (
    <div className='menu-container' id='menu'>
        <div className='menu-header'>
          <h1>This weeks specials!</h1>
          <button >Online Menu</button>
        </div>
        <div className='menu-contant'>
        {recipes.map((recipe) => (
          <div className='card' key={recipe.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>{recipe.title}</h2>
            <h3 style={{color:'black'}}>{recipe.price}</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>{recipe.description}</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu