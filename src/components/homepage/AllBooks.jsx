import { use } from "react";
import BookCard from "../shared/BookCard/BookCard";


const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    console.log("booksData", books);

    return (
        <div className="container mx-auto mt-7">
            <h1 className="text-center text-6xl font-bold">Books</h1>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => (
                       <BookCard book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllBooks;