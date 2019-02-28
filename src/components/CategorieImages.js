import React from 'react'
import { Link } from 'react-router-dom'

export default function CategorieImages(props) {
    const images = props.images
    const title = props.title
    const id = props.id
        return (
            
            <div className="categorie-images">
                <Link to="/">Go back to the index</Link>
                <h2>Here is { props.props.match.params.category } drinks</h2>
                <div>
                { id && title && images && images.map((url, index) => 
                <div className="thumb">
                    <Link to={ `/recipe/${id[index]}` }>
                        <img src={ url } title={ props.title[index] } alt={ 'Drink'} />
                        <span>
                            {`${props.title[index]}`}
                        </span>
                    </Link>
                </div>) 
            
            }
                { !images && 'Loading...' }
        </div>
            </div>
        )
    }
