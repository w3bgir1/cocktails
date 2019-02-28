import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe(props) {
    const data = props.props
    
    return (
            
        <div>
            <Link to="/">Go back to the index</Link>
                {
                    data &&
                    <div className="recipe">
                        <h2>{data.name}</h2>
                        <img src={ data.image } alt="Yumm!!"></img>
                        <p>{ data.alcoholic }</p>
                        <p>Category: { data.category }</p>
                        <p>Required glass: {data.glass}</p>
                        <p>Ingredients:</p>
                        {data.ingredients.map((el,i) => <li><span className="measure">{data.measures[i]}</span> { el }</li>)}
                        <p>Instructions:</p>
                        <p>{data.instructions}</p>
                    </div>
                }
   
        </div>
    )
}