import React from "react";
import TextInput from "../components/UI elements/TextInput";
import YearInput from "../components/UI elements/DateInput";
import TextArea from "../components/UI elements/TextArea";
import Title from "../components/UI elements/Title";
import Button from "../components/UI elements/Button";
import useHandleForm from "../hooks/useHandleForm";
import { CgLayoutGrid } from "react-icons/cg";
import DateInput from "../components/UI elements/DateInput";

const AddBook = () => {
  const { handleChange, error, values, validate } = useHandleForm({
    author: undefined,
    publisher: undefined,
    coverImg: undefined,
    date: undefined,
    overview: undefined,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("H");
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      <Title text="Add Book" />
      <form
        onSubmit={handleSubmit}
        className="w-9/10 rounded-xl border-2 border-gray-300 p-5 md:w-4/5 md:p-10"
      >
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
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
