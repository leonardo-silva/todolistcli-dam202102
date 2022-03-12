import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='#121015' 
      />
      <Home />
    </>
  );
}

// JSX deve retornar apenas um elemento. Caso tenha mais de um
// no nível mais externo (parent), pode-se usar o componente
// Fragment, ou a tag vazia <> .. </>