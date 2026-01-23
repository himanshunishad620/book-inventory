import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/edit/:bookid" element={<EditBook />} />
    </Routes>
  );
};

export default AppRoutes;
