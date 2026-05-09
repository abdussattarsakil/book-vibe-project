import { use } from "react";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    console.log("booksData", books);

    return (
        <div className="container mx-auto mt-7">
            <h1 className="text-center text-6xl font-bold">Books</h1>

            {
                books.map(book => (
                    <div className="mt-10">
                        <div className="card bg-base-100 w-96 shadow-sm border border-dashed p-5 border-gray-400">
                            <figure>
                                <img src={book.image} alt={book.bookName} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllBooks;