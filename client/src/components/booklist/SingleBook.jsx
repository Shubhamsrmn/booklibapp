import React, { useState } from "react";
import "./booklist.css";
import edit from "../../utils/icons/edit.svg";
import remove from "../../utils/icons/delete.svg";
import { Link } from "react-router-dom";
import fetchBooks from "../../utils/db";
const SingleBook = (props) => {
  const deleteBookHandler = async () => {
    const res = await fetch(
      `http://localhost:5000/api/books/${props.book._id}`,
      {
        method: "POST",
      }
    );
    const data = await res.json();
    const resp = await fetchBooks();
    props.setBooks(resp.books);
  };
  return (
    <div className="singlebook">
      <Link to={`/books/${props.book._id}`}>
        <span>
          <img
            src={props.book.imageLink}
            alt="book image"
            width={160}
            height={160}
          />
          <h3 className="singlebook_title">Title:{props.book.title}</h3>
          <h4 className="singlebook_title">Author:{props.book.author}</h4>
        </span>
      </Link>
      <span className="singlebook_icon_container">
        <button
          className="singlebook_icon_btn"
          onClick={() => {
            props.setUpdate(true);
            props.setUpdateEl(props.book._id);
          }}
        >
          <img src={edit} alt="" width={24} height={24} id="edit" />
        </button>
        <button className="singlebook_icon_btn" onClick={deleteBookHandler}>
          <img src={remove} alt="" width={24} height={24} id="delete" />
        </button>
      </span>
    </div>
  );
};

export default SingleBook;
