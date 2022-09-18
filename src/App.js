import React from "react";
import TodoTemplate from "./components/Todo/TodoTemplate"
import TodoInsert from "./components/Insert/TodoInsert";
// import FinishTemplate from "./components/Finish/FinishTemplate"

const App = () => {
  return (
  <TodoTemplate>
    <TodoInsert>
    </TodoInsert>
  </TodoTemplate>  
  );
};


export default App;
