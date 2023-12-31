import { useEffect, useState } from "react";
import  ToDo  from "./components/ToDo";
import { getAllToDo } from "./utils/HandleApi";

function App() {
const [toDo, setToDo]= useState([])

useEffect(()=>{
  getAllToDo(setToDo)
},[])

  return (
    <div className="App">
      
        <div className="container">
          
          <h1>ToDo APP</h1>
          <div className="top">
            <input type="text" placeholder="Add ToDos ...."/>
            <div className="add">
              Add
            </div>

          </div>
          <div className="list">
          {toDo.map((item)=><ToDo key={item._id} text={item.text} />)}
          <ToDo text="helooooooo"/>
         

          </div>
          
        </div>

    </div>
  );
}

export default App;
