import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';

import Table from './components/table'
import Navbar from './components/navbar'

const App = () => (
  <div className="max-w-md mx-auto flex p-6 bg-blue-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
    <Navbar />
      <h1 className="text-2xl text-red-500 leading-tight">
        Practicing Tailwind
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Learning create-react-app and yarn
      </p>
      <Table />
    </div>
  </div>
);
ReactDOM.render(<App />, document.querySelector('#root'));
