import React, { useState } from "react";
import './App.css';
import Tweet from "./Tweet";


function App() {
 
  const [users, setUsers] = useState([
    {name: "Shajid", message: "Hello There"}, //This is the First Object
    {name: "Madeeha", message: "Hi There"}, //This is the Second Object
    {name: "Bareera", message: "Hi! Mommy!"}, //This is the third Object
    {name: "Abrar", message: "Hi, Daddy!"} //This is the Fourth Object

  ]);

  return (
        <div className="app">
          {users.map(user=>(
            <Tweet name={user.name} message={user.message}/>
          ))}


        </div>
  );
}

export default App;
