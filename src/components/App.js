import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <div>
      <Header />
      {/* <Note 
       title = {notes[0].title}
        content =  {notes[0].content}
        /> */}
      {notes.map( noteItems => (
      <Note 
      id = {noteItems.id}
      key = {noteItems.id}
      title = {noteItems.title}
      content = {noteItems.content}
       />
      )
)};
      <Footer />
    </div>
  );
}

export default App;
