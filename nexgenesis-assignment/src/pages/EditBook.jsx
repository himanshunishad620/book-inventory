import { useEffect } from "react";
import TextInput from "../components/UI elements/TextInput";
import TextArea from "../components/UI elements/TextArea";
import Title from "../components/UI elements/Title";
import Button from "../components/UI elements/Button";
import useHandleForm from "../hooks/useHandleForm";
import DateInput from "../components/UI elements/DateInput";
import { useParams } from "react-router-dom";
import { useGetBookQuery, useUpdateBookMutation } from "../api/booksApi";
import { toast } from "react-toastify";
import Success from "../components/UI elements/Success";
import NotFound from "../components/NotFound";

const EditBook = () => {
  const { bookid } = useParams();
  const {
    data: book,
    isLoading: isBookLoading,
    isError,
  } = useGetBookQuery(bookid);
  const [updateBook, { isLoading, isSuccess }] = useUpdateBookMutation();
  const { handleChange, error, values, updateValues, validate } = useHandleForm(
    {
      title: "",
      author: "",
      publisher: "",
      coverImg: "",
      date: "",
      overview: "",
    },
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await updateBook(values).unwrap();
    } catch (err) {
      toast.error("Unable to process request!");
    }
  };
  useEffect(() => {
    if (book) updateValues(book);
  }, [book]);
  if (isSuccess) return <Success />;
  if (isError) return <NotFound />;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      {/* Update book form  */}
      <form
        onSubmit={handleSubmit}
        className="w-9/10 rounded-xl border-2 border-gray-300 p-5 shadow-[0_0_20px_rgba(0,0,0,0.15)] md:w-4/5 md:p-10"
      >
        <div className="flex justify-center">
          <Title text="Update Book" />
        </div>
        <TextInput
          placeholder={isBookLoading ? "Loading..." : "e.g. Rich Dad, Poor Dad"}
          value={values.title}
          name="title"
          error={error.title}
          onChange={handleChange}
          label="Title"
        />
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput
            placeholder={isBookLoading ? "Loading..." : "e.g. John Doe"}
            value={values.author}
            name="author"
            error={error.author}
            onChange={handleChange}
            label="Author"
          />
          <TextInput
            placeholder={isBookLoading ? "Loading..." : "e.g. abc publication"}
            value={values.publisher}
            name="publisher"
            error={error.publisher}
            onChange={handleChange}
            label="Publisher"
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput
            placeholder={
              isBookLoading ? "Loading..." : "e.g. http://youpic.com"
            }
            value={values.coverImg}
            name="coverImg"
            error={error.coverImg}
            onChange={handleChange}
            label="Cover Image"
          />
          <DateInput
            placeholder={isBookLoading ? "Loading..." : "e.g. dd/mm/yyyy"}
            value={values.date}
            name="date"
            error={error.date}
            onChange={handleChange}
            label="Date"
          />
        </div>
        <TextArea
          placeholder={
            isBookLoading ? "Loading..." : "e.g. Summary of the book"
          }
          value={values.overview}
          name="overview"
          error={error.overview}
          onChange={handleChange}
          label="Overview"
        />
        <div className="my-2">
          <Button text={"Submit"} isLoading={isLoading} disabled={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default EditBook;
