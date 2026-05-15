import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    console.log(children, "book context children");

    const [storeBook, setStoreBook] = useState([])

    const handleMarkAsRead = (exceptedBook) => {

        const isExistBook = storeBook.find(book=>book.bookId === exceptedBook.bookId);

        if(isExistBook){
            alert("the book is already exist")
        }
        else{
            setStoreBook([...storeBook,exceptedBook]);
            alert("successfully added this book")
        }

   }


    const data = {
        handleMarkAsRead
    }


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};


export default BookProvider;