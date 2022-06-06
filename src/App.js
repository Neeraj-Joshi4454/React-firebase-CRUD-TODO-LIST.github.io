
import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Booklist from './components/Booklist';

function App() {

  const [bookId, setBookId] = useState("");

  const getBookIDHandler = (id) => {
    console.log("Id of the document to be edited : ", id);
    setBookId(id);
  };

  return (
    <>
      <AddBook id={bookId} setBookId={setBookId}/>   
      <Booklist getBookId={getBookIDHandler}/>         
    </>
  );
}

export default App;
