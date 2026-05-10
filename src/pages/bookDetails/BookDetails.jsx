import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {

    const { id } = useParams();
    console.log(id, "params");

    const books = useLoaderData();
    console.log(books);
    const exceptedBook = books.find((book) => book.bookId == id)
    console.log(exceptedBook);

    return (
        <div>

        </div>
    );
};

export default BookDetails;