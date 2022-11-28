import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Define tree entry type
type TypeEntry={
  name: string;
  children?: TypeEntry[];
}

// Sample Data to be parsed
const files = {
  children: [
    {
      name: "node_modules",
      children:[
        {
          name: "hello",
          children:[
            {
              name: "world",
            }
          ]
        }
      ]
    },
    {
      name: "package.json",
      children:[
        {
          name: "JSON",
        }
      ]
    },
    {
      name: "Typescript"
    },
    {
      name: "Javascript"
    },
    {
      name: "REACT",
      children:[
        {
          name: "hello",
          children:[
            {
              name: "world",
              children:[
                {
                  name: "I am",
                  children:[
                    {
                      name: "Nested",
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  ],
}

// Entry function prints the sample data to the screen as a Tree
// Prints data to screen condensed
// Data can be expanded if it contains a child
// This can be expanded and contracted
function Entry({entry,depth}: {entry: TypeEntry;depth:number}) {
  const[expanded,setExpanded]=useState(false);
  return ( 
  <div>
    {entry.children ? (
    <button className="expandButton" onClick={()=> setExpanded(!expanded)}>
      {expanded ? "-":"+"} {entry.name}
    </button>
    ) : 
    (<div className = "nonChildren">
      {entry.name}
      </div>
    )}
    {expanded && (
    <div className = "children"style={{paddingLeft: `${depth*15}px` }}>
      {entry.children?.map((entry) =>(
        <Entry entry = {entry} depth={depth+1}/>
      ))}
    </div>
    )}
  </div>
  );
}

// main application
// returns a tree of given data
// calls the entry function
function App() {
  return (
    <div className="App">
      {files.children.map((entry) => (
        <Entry entry = {entry} depth={1}/>
      ))};
    </div>
  );
}

export default App;
