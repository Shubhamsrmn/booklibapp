import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/Header";
import "../books/books.css";
import "./singlefullbook.css";
const SingleFullBook = () => {
  const { id } = useParams();
  const [fullbook, setFullbook] = useState({});
  useEffect(() => {
    const fetchSingle = async () => {
      const res = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "GET",
        // headers: {
        //   "x-access-token": localStorage.getItem("token"),
        // },
      });
      const data = await res.json();
      console.log(data);
      setFullbook(() => {
        const temp = data.book;
        return temp;
      });
    };
    fetchSingle();
  }, []);
  return (
    <div className="books_container">
      <Header />
      <div className="singlefullbook_container">
        <img src={fullbook.imageLink} alt="" width={300} height={600} />
        <div className="singlefullbook_text">
          <span>Title : {fullbook.title}</span>
          <span>Author: {fullbook.title}</span>
          <span>Language: {fullbook.language}</span>
          <span>Country: {fullbook.country}</span>
          <span>Pages: {fullbook.pages}</span>
          <span>Published Year: {fullbook.year}</span>
          <span className="fullbook_link">
            <a href={fullbook.link}>Book Link</a>
          </span>
        </div>
      </div>
      <a href=""></a>
    </div>
  );
};

export default SingleFullBook;
