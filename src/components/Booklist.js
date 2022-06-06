import React, { useEffect, useState } from 'react'
import book_services from '../services/book_services';

function Booklist( { getBookId } ) {

    // fetching Books Starts
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);
    
    
    const getBooks = async () => {
        
        const data = await book_services.getAllBooks();
        console.log(data.docs);
        setBooks(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    
    // fetching Books ends


    // Delete Book Starts

    const deleteHandler = async (id) => {

        book_services.deleteBook(id);
        getBooks();
        window.alert("Book deleted");
    }

    // Delete Book Ends



  return (
      <>

    {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}

    <button onClick={getBooks}>Refresh</button>
    <table border={1}>
        <thead>
            <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>

            {
                books.map((cval, i) => {
                    return(
                        <tr key={cval.id}>
                            <td>{i+1}</td>
                            <td>{cval.title}</td>
                            <td>{cval.author}</td>
                            <td><button onClick={(e) => deleteHandler(cval.id) }>Delete</button> /
                             <button onClick={(e) => getBookId(cval.id)}>Update</button></td>
                        </tr>
                    );
                })

            }


        </tbody>
    </table>
      </>
  )
}

export default Booklist