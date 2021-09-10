import React from "react";
import EditorComp from "./Component/Editor/Editor";
import SideBar from "./Component/SideBar/SideBar";
import EditorConext from "./context/EditorContext";

function App() {
  return (
    <EditorConext>
      <div className="App">
        <div className="container text-center">
          <h1 className="my-5">Long Shot AI Text Editor</h1>
          <div className="row border border-light">
            <div className="col-9 p-0">
              <EditorComp />
            </div>
            <div className="col-3 bg-light">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </EditorConext>
  );
}

export default App;
