import React, { useState } from "react";
import "./booklist.css";
import SingleBook from "./SingleBook";
import CreateBook from "../create/CreateBook";
import UpdateBook from "../update/UpdateBook";

const BookList = (props) => {
  const books = props.books;
  const [iscreateActive, setCreate] = useState(false);
  const [isUpdateActive, setUpdate] = useState(false);
  const [updateElement, setUpdateEl] = useState(-1);
  const createHandler = (el) => {
    setCreate(true);
  };
  return (
    <div className="booklist_container">
      <div
        className={`booklist_header ${
          iscreateActive || isUpdateActive ? "active" : ""
        }`}
      >
        <h2 className="booklist_title">All Books</h2>
        <button className="createbook_btn" onClick={createHandler}>
          Create New
        </button>
      </div>
      <div
        className={`booklist_subcontainer ${
          iscreateActive || isUpdateActive ? "active" : ""
        }`}
      >
        {books.map((book, idx) => {
          return (
            <SingleBook
              book={book}
              setBooks={props.setBooks}
              setUpdate={setUpdate}
              setUpdateEl={setUpdateEl}
              key={idx}
            />
          );
        })}
      </div>
      {iscreateActive ? (
        <CreateBook setCreate={setCreate} setBooks={props.setBooks} />
      ) : (
        ""
      )}
      {isUpdateActive ? (
        <UpdateBook
          setBooks={props.setBooks}
          setUpdateEl={setUpdateEl}
          setUpdate={setUpdate}
          updateElement={updateElement}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default BookList;
