import React , { useState } from 'react';
import styled from 'styled-components' ;

const Title = styled.h1``;
const Input = styled.input`
  width:400px;
  height:30px;
  font-size: 16px;
  padding: 10px;
  boder: 1px solid $000;
`;

function App (){
 
  const [ price, setPrice ] = useState(0);
  const [ percent, setPercent ] = useState(10);

  return (
    <>
     <Title>Calculadora de Gorjetas</Title>
     <p>Qual o valor da Conta ?</p>
     <Input type="number" value={price} onChange={ (e) => setPrice(parseFloat(e.target.value)) } ></Input>
     
     <p>Qual a porcentagem da Gorjeta?</p>
     <Input type="number" value={percent} onChange={ (e) => setPercent(parseFloat(e.target.value))  } ></Input>
     <hr/>

    { price > 0 &&
      <>
        <p>SubTotal: R$ {price} </p>
        <p>Gorjeta ( {percent} % ): R$ {(price  * ( percent/100 )).toFixed(2) } </p>
        <h3>Total: R$ { (price +  ( price  * ( percent/100 ) )).toFixed(2) } </h3>

      </>
    }

    </>
  );   
}

 

export default App;