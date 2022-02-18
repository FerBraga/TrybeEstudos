import React from 'react';

class Pokemon extends React.Component {
    render() {
    const {poke: { name, type, averageWeight: {value,measurementUnit}, image} } = this.props;
      return(
        <div>,
          <img src={image} alt='imagem do bixu'></img><br></br>
          <p>Nome:{name}.<br></br> 
          Tipo:{type}. <br></br>
          Peso: {value} {measurementUnit} 
          </p>
        </div>
        );
    }
}

export default Pokemon;
