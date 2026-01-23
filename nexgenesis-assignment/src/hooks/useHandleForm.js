import { useState } from "react";

export default function useHandleForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(initialValues);
  const validate = () => {
    if (
      Object.values(error).every(
        (value) => value === undefined || value === null,
      )
    ) {
      console.log("False");
      return false;
    }

    return Object.values(error).every((value) => value === "");
  };
  const updateValues = (values) => setValues(values);
  const handleChange = (e) => {
    setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    switch (e.target.name) {
      case "author":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, author: "Author is required!" }));
        else setError((pre) => ({ ...pre, author: "" }));
        break;
      case "publisher":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, publisher: "Publisher is required!" }));
        else setError((pre) => ({ ...pre, publisher: "" }));
        break;
      case "overview":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, overview: "Overview is required!" }));
        else setError((pre) => ({ ...pre, overview: "" }));
        break;
      case "date":
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(e.target.value.trim()))
          setError((pre) => ({ ...pre, date: "Invalid Date!" }));
        else setError((pre) => ({ ...pre, date: "" }));
        break;
      case "coverImg":
        if (!/^(http|https):\/\/[^ "]+$/.test(e.target.value))
          setError((pre) => ({ ...pre, coverImg: "Invalid url!" }));
        else setError((pre) => ({ ...pre, coverImg: "" }));
        break;
    }
  };
  return { values, error, handleChange, validate, updateValues };
}
