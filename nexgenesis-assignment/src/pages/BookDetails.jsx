import Title from "../components/UI elements/Title";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../api/booksApi";
import { formatMonthYear } from "../helper/date";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";

const BookDetails = () => {
  const { bookid } = useParams();
  const { data: book, isError, isLoading } = useGetBookQuery(bookid);
  if (isError) return <NotFound />;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      <div className="w-9/10 rounded-xl border-2 border-gray-300 p-5 md:w-4/5 md:p-10">
        <div className="mb-0 h-1/10 md:mb-5">
          <Title text="Book Details" />
        </div>
        {!book && isLoading && <Loading />}
        {book && (
          <div className="flex h-8/10 w-full flex-col md:flex-row">
            <div className="flex aspect-square h-full w-full items-center justify-center md:w-1/2">
              <img className="h-full w-full" src={book.coverImg} alt="" />
            </div>
            <div className="items-left flex h-full w-full flex-col justify-between bg-[#f5f5f5] p-5 md:w-1/2 md:p-12">
              <p>
                <b>Author : </b>
                {book.author}
              </p>
              <p>
                <b>Publisher : </b>
                {book.publisher}
              </p>
              <p>
                <b>Published On : </b>
                {formatMonthYear(book.date)}
              </p>
              <p>
                <b>Book Id : </b>
                {book.id}
              </p>
              <p>
                <b>Overview : </b>
                {book.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
