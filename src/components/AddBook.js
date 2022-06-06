import BookDataService from '../services/book_services';
import React, { useState, useEffect } from 'react'
import book_services from '../services/book_services';

function AddBook( { id, setBookId } ) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(title==="" || author===""){
            window.alert("All feilds are mandatory");
            return
        }

        const newBook = {
            title,
            author
        };

        console.log(newBook);

        try{

            if(id !== "" && id!== undefined){
                await book_services.updateBook(id, newBook);
                setBookId("");
                window.alert("book updated successfully.")
            }
            else{
                await BookDataService.addBooks(newBook);
                window.alert("New Book added successfully");
            }
            // window.location.reload();
            console.log("book added")
        }
        catch(err){
            window.alert(err);
            console.log("book was not added");
        }

        setTitle("");
        setAuthor("");
    }

    // edit handler starts
        const editHandler = async () => {

            try{

                const oldbooks = await book_services.getBook(id);
                console.log("Updated data is :",oldbooks.data());
                setTitle(oldbooks.data().title);
                setAuthor(oldbooks.data().author);

            }catch(err){
                console.log(err);
            }
        }

    // edit handler ends


    // useeffect run after user clicks on update button
    useEffect(() => {
        console.log("id here is : ",id)
        if( id !== undefined && id !==""){
            editHandler();
        }
    }, [id]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <lable htmlFor="title">Title</lable>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <lable htmlFor="author">Author</lable>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <input type="submit" value="send" />
            </form>
        </>
    )
}

export default AddBook;