import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:bookid" element={<BookDetails />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/edit/:bookid" element={<EditBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
