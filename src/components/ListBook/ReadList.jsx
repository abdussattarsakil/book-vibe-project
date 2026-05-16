import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";


const ReadList = () => {
    const { readBooks } = useContext(BookContext)

    if (readBooks.length === 0) {
        return <div className="shadow-sm bg-base-100 p-20 m-6 text-2xl text-center">
            <h2>No Read List Data Found</h2>
        </div>
    }

    return (
        <div >
            {
                readBooks.map(book => (
                    <h1 className="shadow-sm bg-base-100 p-5 m-6 text-2xl">Book Name: {book.bookName}</h1>
                ))
            }
        </div>
    );
};

export default ReadList;