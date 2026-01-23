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

const EditBook = () => {
  const { bookid } = useParams();
  const {
    data: book,
    isLoading: isBookLoading,
    isError,
  } = useGetBookQuery(bookid);
  const [updateBook, { data, isLoading }] = useUpdateBookMutation();
  const { handleChange, error, values, updateValues, validate } = useHandleForm(
    {
      author: "",
      publisher: "",
      coverImg: "",
      date: "",
      overview: "",
    },
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Values cannot be empty!");
      return;
    }
    try {
      await updateBook(values).unwrap();
      toast.success("Book updated successfuly!");
    } catch (err) {
      toast.error("Unable to proceed!");
    }
  };
  useEffect(() => {
    if (book) updateValues(book);
  }, [book]);
  if (isError) return <p>Data not found!</p>;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-9/10 rounded-xl border-2 border-gray-300 p-5 md:w-4/5 md:p-10"
      >
        <Title text="Update Book" />
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput
            placeholder="e.g. John Doe"
            value={isBookLoading ? "Loading..." : values.author}
            name="author"
            error={error.author}
            onChange={handleChange}
            label="Author"
          />
          <TextInput
            value={isBookLoading ? "Loading..." : values.publisher}
            placeholder="e.g. Abc publication"
            name="publisher"
            label="Publisher"
            error={error.publisher}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput
            value={isBookLoading ? "Loading..." : values.coverImg}
            onChange={handleChange}
            error={error.coverImg}
            placeholder="e.g. http://youpic.com"
            label="Cover Image"
            name="coverImg"
          />
          <DateInput
            label="Date"
            value={isBookLoading ? "Loading..." : values.date}
            name="date"
            error={error.date}
            onChange={handleChange}
          />
        </div>
        <TextArea
          label="Overview"
          name="overview"
          value={isBookLoading ? "Loading..." : values.overview}
          error={error.overview}
          onChange={handleChange}
        />
        <div className="my-2">
          <Button text={"Submit"} isLoading={isLoading} disabled={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default EditBook;
