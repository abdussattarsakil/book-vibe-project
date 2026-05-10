import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";


const BookCard = ({ book }) => {
    return (
        <div>
            <div className="mt-10">
                <div className="card bg-base-100 shadow-sm border border-dashed p-5 border-gray-400">
                    <figure className="bg-base-300 p-10 rounded-2xl">
                        <img className="h-60" src={book.image} alt={book.bookName} />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            {
                                book.tags.map(tag => (
                                    <p className="badge text-green-500 bg-green-100 font-bold ">
                                        {tag}
                                    </p>
                                ))
                            }
                        </div>
                        <h2 className="card-title">
                            {book.bookName}

                        </h2>
                        <p>{book.author}</p>
                        <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-3">
                            <div className="badge badge-outline">{book.category}</div>
                            <div className="flex items-center gap-2">
                                {book.rating}
                                <FaRegStar />
                            </div>
                        </div>
                        <Link to={`/bookDetails/${book.bookId}`} className="flex justify-end">
                            <button className="btn btn-info">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;