import React from "react";
import TextInput from "../components/UI elements/TextInput";
import YearInput from "../components/UI elements/YearInput";
import TextArea from "../components/UI elements/TextArea";
import Title from "../components/UI elements/Title";
import Button from "../components/UI elements/Button";

const AddBook = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      <Title text="Add Book" />
      <form className="w-9/10 rounded-xl border-2 border-gray-300 p-5 md:w-4/5 md:p-10">
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput placeholder="Name" type="text" />
          <TextInput placeholder="Name" type="text" />
        </div>
        <div className="flex w-full flex-col justify-between gap-0 md:flex-row md:gap-3">
          <TextInput placeholder="Name" type="text" />
          <YearInput />
        </div>
        <TextArea />
        <div className="my-2">
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
