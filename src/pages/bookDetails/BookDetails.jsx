

import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookContext";



// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  //   const books = use(booksPromise);

  const books = useLoaderData();
  // console.log(books, "books ");
  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  // console.log(expectedBook, "expectedBook");
  const {

    bookName,
    author,
    image,
    review,
    totalPages,

    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;



  const { handleMarkReadBook, handleWishBook } = useContext(BookContext);




  return (
    <div className="grid md:grid-cols-2 bg-base-100 shadow-xl container mx-auto my-8 rounded-4xl">
      <figure className="w-full flex items-center justify-center bg-base-200">
        <img src={image} alt="Album" className="h-80" />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By: {author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p>Review: {review}</p>
        <div className="flex items-center gap-2 ">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 font-bold "
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t space-y-3">
          <div className="flex justify-between items-center gap-2">
            <span>Number of pages: </span> <span>{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>publisher: </span> <span>{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Publish time: </span> <span>{yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn"
              onClick={() => handleMarkReadBook(expectedBook)}
            >
              Mark as Read
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleWishBook(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;