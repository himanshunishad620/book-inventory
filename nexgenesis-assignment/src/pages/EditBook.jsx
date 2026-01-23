import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../api/booksApi";

const EditBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(id);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Data not found!</p>;
  return <div>EditBook</div>;
};

export default EditBook;
