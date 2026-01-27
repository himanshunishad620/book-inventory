import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../api/booksApi";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import Title from "../components/UI elements/Title";

const BookDetails = () => {
  const { bookid } = useParams();
  const { data: book, isError, isLoading } = useGetBookQuery(bookid);
  if (isError) return <NotFound />;
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <div className="mx-auto flex w-3xl px-4 py-5">
        {!book && isLoading && <Loading />}
        {book && (
          <div className="grid grid-cols-1 gap-10 rounded-2xl border-2 border-gray-300 bg-white p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] md:grid-cols-2 md:p-10">
            {/* book cover image */}
            <div className="flex justify-center">
              <img
                src={book.coverImg}
                alt={book.title || "Book cover"}
                className="h-80 w-60 rounded-xl object-cover shadow-md"
              />
            </div>

            {/* book info */}
            <div>
              <Title text={book.title} />
              <p className="text-gray-600">
                by <span className="font-semibold">{book.author}</span>
              </p>
              <div className="mt-4 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Publisher:</span>{" "}
                  {book.publisher}
                </p>
                <p>
                  <span className="font-medium">Published on:</span> {book.date}
                </p>
                <p>
                  <span className="font-medium">Book Id:</span> {book.id}
                </p>
              </div>
              <div className="mt-3">
                <h3 className="text-md mb-2 font-semibold">Overview</h3>
                <p className="text-sm text-gray-700">{book.overview}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
