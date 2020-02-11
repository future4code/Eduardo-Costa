import React from 'react'
import './BigCard.css'
import PropTypes from 'prop-types'

function BigCard(props) {
    return(
        <div className="bigcard">
            <div className="bigcard-img">
            <img src={ props.imagem } alt={ props.nome }/>
            </div>
            <div className="bigcard-text">
            <h4>{ props.nome }</h4>
            <p>{ props.texto }</p>
            </div>
        </div>
    )
}
BigCard.propTypes = {
    nome: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,  
    imagem: PropTypes.string,    
}

export default BigCard