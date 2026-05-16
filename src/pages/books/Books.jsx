import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const Books = () => {

const {readBooks}=useContext(BookContext)

    return (
        <div className="">
            <h1 className="text-5xl text-center mb-10"> Listed Books</h1>
            {
                readBooks.map(book=>(
                    <div className="shadow-2xl bg-base-200 container mx-auto p-5 text-2xl mb-5">
                <h1>
                    {book.bookName}
                </h1>
            </div>
                ))
            }

        </div>
    );
};

export default Books;