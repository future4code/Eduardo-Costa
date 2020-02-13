import React from 'react'
import './SmallCard.css'
import PropTypes from 'prop-types'


function SmallCard(props) {
    return(
        <div className="smallcard">
            <div className="smallcard-img">
            <img src={ props.imagem } alt={ props.nome }/>
            </div>
            <div className="smallcard-text">
            <h5>{ props.nome }</h5>
            <p>{ props.texto }</p>
            </div>
        </div>
    )
}
SmallCard.propTypes = {
    nome: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,  
    imagem: PropTypes.string,    
}

export default SmallCard