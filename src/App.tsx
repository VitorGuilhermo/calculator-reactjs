import React from 'react';
import { GlobalStyle } from './assets/styles/global';
import { Calculator } from './components/Calculator';

export function App() {
  return (
    <div>
      <Calculator/>

      <GlobalStyle/>
    </div>
  );
}