import TextInput from "../components/UI elements/TextInput";
import TextArea from "../components/UI elements/TextArea";
import Title from "../components/UI elements/Title";
import Button from "../components/UI elements/Button";
import useHandleForm from "../hooks/useHandleForm";
import DateInput from "../components/UI elements/DateInput";
import { useAddBookMutation } from "../api/booksApi";
import { toast } from "react-toastify";
const initialValues = {
  author: undefined,
  publisher: undefined,
  coverImg: undefined,
  date: undefined,
  overview: undefined,
};
const AddBook = () => {
  const [addBook, { isLoading }] = useAddBookMutation();
  const { handleChange, error, values, validate } =
    useHandleForm(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Values cannot be empty!");
      return;
    }
    try {
      await addBook(values).unwrap();
      toast.success("Book Added Successfuly!");
    } catch (error) {
      toast.error("Unable to process the request!");
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-9/10 rounded-xl border-2 border-gray-300 p-5 md:w-4/5 md:p-10"
      >
        <Title text="Add Book" />
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput
            placeholder="e.g. John Doe"
            value={values.author}
            name="author"
            error={error.author}
            onChange={handleChange}
            label="Author"
          />
          <TextInput
            value={values.publisher}
            placeholder="e.g. Abc publication"
            name="publisher"
            label="Publisher"
            error={error.publisher}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput
            value={values.coverImg}
            onChange={handleChange}
            error={error.coverImg}
            placeholder="e.g. http://youpic.com"
            label="Cover Image"
            name="coverImg"
          />
          <DateInput
            label="Date"
            value={values.date}
            name="date"
            error={error.date}
            placeholder="e.g. dd/mm/yyyy"
            onChange={handleChange}
          />
        </div>
        <TextArea
          label="Overview"
          name="overview"
          value={values.overview}
          error={error.overview}
          onChange={handleChange}
        />
        <div className="my-2">
          <Button text={"Submit"} disabled={isLoading} isLoading={false} />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
