import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function CategorieImages(props) {
    const images = props.images

        return (
            <div className="categorie-images">
                <Link to="/">Go back to the index</Link>
                <h1>Here is { props.props.match.params.categorie } drinks</h1>
                <div>
                { images && images.map(url => <img src={ url } alt="Drink" />) }
                { !images && 'Loading...' }
        </div>
            </div>
        )
    }
