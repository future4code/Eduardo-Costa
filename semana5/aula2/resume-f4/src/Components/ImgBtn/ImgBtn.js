import React from 'react'
import './ImgBtn.css'
import PropTypes from 'prop-types'


function ImgBtn(props) {
    return(
        <div className="imgbtn">
            <div className="imgbtn-img">
            <img src={ props.imagem } alt={ props.texto }/>
            </div>
            <div className="imgbtn-text">
                <a href={ props.link }>{ props.texto }</a>
            </div>
        </div>
    )
}
ImgBtn.propTypes = {
    link: PropTypes.string,
    texto: PropTypes.string.isRequired,  
    imagem: PropTypes.string.isRequired,    
}
export default ImgBtn