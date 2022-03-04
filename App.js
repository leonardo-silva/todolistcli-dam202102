import React from 'react';
import { StatusBar } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Home />
    </>
  );
}