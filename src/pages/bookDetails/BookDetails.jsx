import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {

    const { id } = useParams();
    console.log(id, "params");

    const books = useLoaderData();
    console.log(books);
    const exceptedBook = books.find((book) => book.bookId == id)
    console.log(exceptedBook);

    return (
        <div className="container mx-auto mt-12">
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={exceptedBook.image}
                        alt={exceptedBook.bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{exceptedBook.bookName}</h2>
                    <p>By : {exceptedBook.author}</p>

                    <div className="border-t-2 border-gray-200">  </div>

                    <h4>{exceptedBook.category}</h4>

                    <div className="border-t-2 border-gray-200">  </div>

                    <p>Review: {exceptedBook.review}</p>
                    <div className="flex">
                        <p>Tag</p>
                        <div className="flex gap">
                            {
                                exceptedBook.tags.map(tag => (
                                    <p>{tag}</p>
                                ))
                            }
                        </div>
                    </div>


                    <div className="border-t-2 border-gray-200">  </div>


                    <div className="flex gap-5">
                        <button className="btn">Read</button>
                        <button className="btn btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;