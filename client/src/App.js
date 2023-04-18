import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BooksPage from "./pages/books/Books";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import Layout from "./components/layout/Layout";
import SingleFullBook from "./pages/SingleFullBook/SingleFullBook";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
          </Route>
          <Route path="/books" exact element={<BooksPage />} />
          <Route path="/books/:id" exact element={<SingleFullBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
