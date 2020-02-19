import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Riscado = styled.li`
text-decoration: line-through;
`

class ItemTarefa extends React.Component {
  concluirTarefa = event => {
  };

  render() {
  return(
    <div>
    <ul onClick={() => {this.props.aoClicarConcluir(this.props.id)}}>{this.props.concluida? <Riscado>{this.props.titulo}</Riscado> : <li>{this.props.titulo}</li>}</ul>
    <p>{this.props.teste}</p>
    </div>
  )
  }
}

export default ItemTarefa;