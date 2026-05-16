import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const WishList = () => {
    const { wishBooks } = useContext(BookContext)
    if (wishBooks.length === 0) {
        return <div className="shadow-sm bg-base-100 p-20 m-6 text-2xl text-center">
            <h2>No Wish List Data Found</h2>
        </div>
    }
    return (
        <div>
            {
                wishBooks.map(book=>(
                    <h1 className="shadow-sm bg-base-100 p-5 m-6 text-2xl">Book Name: {book.bookName}</h1>
                ))
            }
        </div>
    );
};

export default WishList;