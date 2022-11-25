import React from 'react';
import logo from './logo.svg';
import './App.css';

type TypeEntry={
  name: string;
  children?: TypeEntry[];
}
const files = {
  children: [
    {
      name: "node_modules",
      children:[
        {
          name: "joi",
        }
      ]
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts"
    },
  ],
}
function Entry({name,children}: TypeEntry) {
  return <div>{name}</div>
}

function App() {
  return (
    <div className="App">
      Hello
      {files.children.map((entry) => (
        <Entry {...entry}/>
      ))};
    </div>
  );
}

export default App;
