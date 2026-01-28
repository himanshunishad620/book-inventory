import { useState } from "react";
import { isValidDate } from "../helper/date";

export default function useHandleForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({ ...initialValues });

  const updateValues = (obj) => setValues({ ...obj });

  const validate = () => {
    let newError = {};
    for (let each in values)
      if (!values[each]) newError[each] = `${each} is required!`;
    let temp = { ...error, ...newError };
    setError({ ...temp });
    for (let each in temp) if (temp[each]) return false;
    return true;
  };

  const handleChange = (e) => {
    setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    switch (e.target.name) {
      case "title":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, title: "title is required!" }));
        else setError((pre) => ({ ...pre, title: "" }));
        break;

      case "author":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, author: "author is required!" }));
        else setError((pre) => ({ ...pre, author: "" }));
        break;

      case "publisher":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, publisher: "publisher is required!" }));
        else setError((pre) => ({ ...pre, publisher: "" }));
        break;

      case "overview":
        if (!e.target.value.trim())
          setError((pre) => ({ ...pre, overview: "overview is required!" }));
        else setError((pre) => ({ ...pre, overview: "" }));
        break;

      case "date":
        if (!isValidDate(e.target.value.trim()))
          setError((pre) => ({ ...pre, date: "invalid Date!" }));
        else setError((pre) => ({ ...pre, date: "" }));
        break;

      case "coverImg":
        if (!/^(http|https):\/\/[^ "]+$/.test(e.target.value))
          setError((pre) => ({ ...pre, coverImg: "invalid url!" }));
        else setError((pre) => ({ ...pre, coverImg: "" }));
        break;
    }
  };
  return { values, error, handleChange, validate, updateValues };
}
