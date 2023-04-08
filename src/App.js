import React, { useState, useEffect } from 'react';
import './App.css';
import imagen from './Images/Logo.png'
import styled from 'styled-components'
import { ButtonPlus, ButtonDec, ButtonCheck, ButtonGen } from './Components/button';
import genPassword from './functions/password';
import Footer from './Components/footer';

const App = () => {
  const [configuration, changeConfig] = useState({
    numChar: 0,
    symbolChar: true,
    numberLock: true,
    capital: true
  });

  const [generatePss, changePssGen] = useState('');

  useEffect ( () => {
    changePssGen(genPassword(configuration));
  }, [configuration]);

  const PlusNum = () => {
    changeConfig((configBack) => {
      const newConfig = {...configBack};
      newConfig.numChar += 1;
      return newConfig;

    });    
  }

  const DecNum = () => {
    if(configuration.numChar > 1){ /*With this conditional would stablished that the counter don't be lesser than 1*/
      changeConfig((configBack) => {
        const newConfig = {...configBack};
        newConfig.numChar -= 1;
      return newConfig;
     });
    }
  }

  const toggleSimbols = () => {
    changeConfig((configBack) => {
      const newConfig = {...configBack};
      newConfig.symbolChar = !newConfig.symbolChar;
      return newConfig;
    });
  }

  const toggleNumbers = () => {
    changeConfig((configBack) => {
      const newConfig = {...configBack};
      newConfig.numberLock = !newConfig.numberLock;
      return newConfig;
    });
  }

  const toggleCapital = () => {
    changeConfig((configBack) => {
      const newConfig = {...configBack};
      newConfig.capital = !newConfig.capital;
      return newConfig;
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    changePssGen(genPassword(configuration));
  }

  return (
    <div className ='contenedor'>
      <Logo>
      <img src={imagen} alt=""/>
      </Logo>

      <form onSubmit={onSubmit}>
        <File>
          <label>Password Lenght:</label>
          <Controls>
            <ButtonDec click={DecNum}/>
            <span>{configuration.numChar}</span>
            <ButtonPlus click={PlusNum}/>
          </Controls>
        </File>
        <File>
          <label>Special Characters:</label>
          <ButtonCheck checkSelect={configuration.symbolChar} click={toggleSimbols} />
        </File>
        <File>
          <label>Numbers:</label>
          <ButtonCheck checkSelect={configuration.numberLock} click={toggleNumbers}/>
        </File>
        <File>
          <label>Uppercase Letters:</label>
          <ButtonCheck checkSelect={configuration.capital} click={toggleCapital}/>
        </File>
        <File>
          <ButtonGen />
          <Input type='text' readOnly={true} value={generatePss}/>
        </File>
      </form>
      <footer>
        <Footer/>
      </footer>
      

    </div>
  );
}


export default App;

const Logo = styled.div`
  
  margin-bottom: 50px;

  img{
    width: 100%;
    vertical-align: top;
  }
`;
const File = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33257E;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: none;
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 4px;
  color: #fff;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(255, 255, 255, .50);
  }

  &::selection {
    background: #212139;
  }

  &::-moz-selection {
    background: #212139;
  }
`;
