import TextInput from "../components/UI elements/TextInput";
import TextArea from "../components/UI elements/TextArea";
import Title from "../components/UI elements/Title";
import Button from "../components/UI elements/Button";
import useHandleForm from "../hooks/useHandleForm";
import DateInput from "../components/UI elements/DateInput";
import { useAddBookMutation } from "../api/booksApi";
import { toast } from "react-toastify";
import Success from "../components/UI elements/Success";
const initialValues = {
  title: undefined,
  author: undefined,
  publisher: undefined,
  coverImg: undefined,
  date: undefined,
  overview: undefined,
};
const AddBook = () => {
  const [addBook, { isLoading, isSuccess }] = useAddBookMutation();
  const { handleChange, error, values, validate, updateValues } =
    useHandleForm(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await addBook(values).unwrap();
    } catch (error) {
      toast.error("Unable to process the request!");
    }
  };
  if (isSuccess) return <Success />;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      {/* Add book form  */}
      <form
        onSubmit={handleSubmit}
        className="w-9/10 rounded-xl border-2 border-gray-300 p-5 shadow-[0_0_20px_rgba(0,0,0,0.15)] md:w-4/5 md:p-10"
      >
        <div className="flex justify-center">
          <Title text="Add Book" />
        </div>
        <TextInput
          placeholder="e.g. Rich Dad, Poor Dad"
          value={values.title}
          name="title"
          error={error.title}
          onChange={handleChange}
          label="Title"
        />
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
          placeholder="Summary of book"
          value={values.overview}
          error={error.overview}
          onChange={handleChange}
        />
        <div className="my-2">
          <Button text={"Submit"} disabled={isLoading} isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
