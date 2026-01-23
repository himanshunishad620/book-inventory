import Button from "./UI elements/Button";
import { useGetBooksQuery } from "../api/booksApi";
import BookItem from "./BookItem";
import { Link } from "react-router-dom";
import SearchInput from "./UI elements/SearchInput";

const BookList = () => {
  const { data } = useGetBooksQuery();
  return (
    <div className="no-scrollbar h-screen w-full">
      <div className="flex h-1/11 items-center justify-between px-4">
        <SearchInput placeholder="jd" />
        <Link to="/add">
          <Button text="Add Book" />
        </Link>
      </div>
      <div className="h-9/10 overflow-y-scroll">
        {data && (
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-[#624DE3]">
              <tr>
                <th className="p-2 text-center font-medium text-white">
                  Cover
                </th>
                <th className="p-2 text-center font-medium text-white">
                  Author
                </th>
                <th className="p-2 text-center font-medium text-white">
                  Published
                </th>
                <th className="p-2 text-center font-medium text-white">
                  Publisher
                </th>
                <th className="p-2 text-center font-medium text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((book, ind) => (
                <BookItem key={ind} {...book} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BookList;
