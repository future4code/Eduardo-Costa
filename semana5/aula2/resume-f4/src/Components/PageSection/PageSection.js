import React from 'react'
import './PageSection.css'
import PropTypes from 'prop-types'


function PageSection(props) {
    return(
        <div className="pagesection">
            <h4>{ props.titulo }</h4>
            { props.children }
        </div>
    )
}

PageSection.propTypes = {
    titulo: PropTypes.string.isRequired,    
}
export default PageSection