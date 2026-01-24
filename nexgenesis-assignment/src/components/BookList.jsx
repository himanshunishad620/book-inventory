import Button from "./UI elements/Button";
import { useGetBooksQuery } from "../api/booksApi";
import BookItem from "./BookItem";
import { Link } from "react-router-dom";
import SearchInput from "./UI elements/SearchInput";
import { useMemo, useState } from "react";
import Loading from "./Loading";
import NotFound from "./NotFound";

const BookList = () => {
  const { data, isLoading } = useGetBooksQuery();
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const filteredBooks = useMemo(() => {
    if (!data) return [];
    if (!query.trim()) return data;

    const q = query.toLowerCase();
    return data.filter(
      (book) =>
        book.author.toLowerCase().includes(q) ||
        book.publisher.toLowerCase().includes(q),
    );
  }, [data, query]);

  return (
    <div className="no-scrollbar h-screen w-full">
      {/* Search bar */}
      <div className="flex h-1/11 items-center justify-between px-4">
        <SearchInput
          placeholder="Search by author or publisher..."
          value={query}
          onChange={handleChange}
        />
        <Link to="/add">
          <Button text="Add Book" />
        </Link>
      </div>

      {/* Book list */}
      <div className="h-9/10 overflow-y-scroll">
        {isLoading && <Loading />}
        {!isLoading && filteredBooks.length === 0 && <NotFound />}
        {/* Book list table  */}
        {filteredBooks.length > 0 && (
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-[#624DE3]">
              <tr>
                <th className="p-2 text-center text-white">Cover</th>
                <th className="p-2 text-center text-white">Author</th>
                <th className="p-2 text-center text-white">Published</th>
                <th className="p-2 text-center text-white">Publisher</th>
                <th className="p-2 text-center text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <BookItem key={book.id} {...book} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BookList;
