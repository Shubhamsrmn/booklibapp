import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import "./books.css";
import Header from "../../components/header/Header";
import BookList from "../../components/booklist/BookList";
import fetchBooks from "../../utils/db";
const BooksPage = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        const getBooks = async () => {
          const res = await fetchBooks();
          setBooks(res.books);
        };
        getBooks();
      }
    } // else navigate("/login");
  }, []);
  return (
    <div className="books_container">
      <Header />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
};

export default BooksPage;
