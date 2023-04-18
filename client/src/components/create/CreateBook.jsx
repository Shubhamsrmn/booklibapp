import React, { useState } from "react";
import "./createbook.css";
import fetchBooks from "../../utils/db";
const CreateBook = (props) => {
  const createFormSubHandler = async (event) => {
    event.preventDefault();
    const createEntry = await fetch(`http://localhost:5000/api/book/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...createFormData,
      }),
    });
    const data = await createEntry.json();
    const resp = await fetchBooks();
    props.setBooks(resp.books);
    props.setCreate(false);
  };
  const [createFormData, setCreateFormData] = useState({
    title: "",
    author: "",
    language: "",
    country: "",
    pages: "",
    year: "",
    imageLink: "",
    Link: "",
  });
  const createFormDataHandler = (el) => {
    if (el.target.id === "title") {
      setCreateFormData((prev) => {
        const temp = { ...prev, title: el.target.value };
        return temp;
      });
    } else if (el.target.id === "author") {
      setCreateFormData((prev) => {
        const temp = { ...prev, author: el.target.value };
        return temp;
      });
    } else if (el.target.id === "language") {
      setCreateFormData((prev) => {
        const temp = { ...prev, language: el.target.value };
        return temp;
      });
    } else if (el.target.id === "country") {
      setCreateFormData((prev) => {
        const temp = { ...prev, country: el.target.value };
        return temp;
      });
    } else if (el.target.id === "pages") {
      setCreateFormData((prev) => {
        const temp = { ...prev, pages: el.target.value };
        return temp;
      });
    } else if (el.target.id === "year") {
      setCreateFormData((prev) => {
        const temp = { ...prev, year: el.target.value };
        return temp;
      });
    } else if (el.target.id === "imageLink") {
      setCreateFormData((prev) => {
        const temp = { ...prev, imageLink: el.target.value };
        return temp;
      });
    } else if (el.target.id === "Link") {
      setCreateFormData((prev) => {
        const temp = { ...prev, Link: el.target.value };
        return temp;
      });
    }
  };
  return (
    <div className="popup_container">
      <button
        className="close_createform"
        onClick={() => props.setCreate(false)}
      >
        close
      </button>
      <form onSubmit={createFormSubHandler} className="create_form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Enter book title"
          id="title"
          onChange={createFormDataHandler}
          value={createFormData.title}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          placeholder="Enter Author Name"
          id="author"
          onChange={createFormDataHandler}
          value={createFormData.author}
        />
        <label htmlFor="lang">Language</label>
        <input
          type="text"
          placeholder="Enter book language"
          id="language"
          onChange={createFormDataHandler}
          value={createFormData.language}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          placeholder="Enter book regions"
          id="country"
          onChange={createFormDataHandler}
          value={createFormData.country}
        />
        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          placeholder="Enter pages count"
          id="pages"
          onChange={createFormDataHandler}
          value={createFormData.pages}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          placeholder="Enter book publish year"
          id="year"
          onChange={createFormDataHandler}
          value={createFormData.year}
        />
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          placeholder="Enter book Image"
          id="imageLink"
          onChange={createFormDataHandler}
          value={createFormData.imageLink}
        />
        <label htmlFor="Link">Link</label>
        <input
          type="text"
          placeholder="Enter book Link"
          id="Link"
          onChange={createFormDataHandler}
          value={createFormData.Link}
        />
        <input type="submit" value="Submit" className="create_submitbtn" />
      </form>
    </div>
  );
};

export default CreateBook;
