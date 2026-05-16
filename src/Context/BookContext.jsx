import { createContext, useState } from "react";

export const BookContext = createContext();

const ListedBooks = ({ children }) => {

    const [readBooks, setReadBook] = useState([]);

    const handleMarkReadBook = book => {
        const isExist = readBooks.find(readBook => readBook.bookId === book.bookId)
        if (isExist) {
            alert('this book is already read')
        }
        else {
            setReadBook([...readBooks, book])
            alert('successfully added')
        }
    }

    const [wishBooks, setWishBook] = useState([]);

    const handleWishBook = book => {
        const isExist = readBooks.find(readBook => readBook.bookId === book.bookId)
        if (isExist) {
            alert('this book is already read')
        }
        else {
            setWishBook([...wishBooks, book])
            alert('successfully added')
        }
    }


    const data = {
        handleMarkReadBook,
        handleWishBook,
        readBooks,
        wishBooks
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
}
export default ListedBooks;