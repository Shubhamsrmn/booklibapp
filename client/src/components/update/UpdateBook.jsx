import React, { useEffect, useState } from "react";
import "../create/createbook.css";
import fetchBooks from "../../utils/db";
const UpdateBook = (props) => {
  const updatesubmitHandler = async (event) => {
    event.preventDefault();
    const updateEntry = await fetch(`http://localhost:5000/api/book/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.updateElement,
        ...formData,
      }),
    });
    const data = await updateEntry.json();
    const resp = await fetchBooks();
    props.setBooks(resp.books);
    props.setUpdate(false);
  };
  useEffect(() => {
    const singleFetch = async () => {
      const res = await fetch(
        `http://localhost:5000/api/books/${props.updateElement}`
      );
      const data = await res.json();
      setFormData(() => data.book);
    };
    singleFetch();
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    language: "",
    country: "",
    pages: "",
    year: "",
    imageLink: "",
    Link: "",
  });
  const formDataHandler = (el) => {
    if (el.target.id === "title") {
      setFormData((prev) => {
        const temp = { ...prev, title: el.target.value };
        return temp;
      });
    } else if (el.target.id === "author") {
      setFormData((prev) => {
        const temp = { ...prev, author: el.target.value };
        return temp;
      });
    } else if (el.target.id === "language") {
      setFormData((prev) => {
        const temp = { ...prev, language: el.target.value };
        return temp;
      });
    } else if (el.target.id === "country") {
      setFormData((prev) => {
        const temp = { ...prev, country: el.target.value };
        return temp;
      });
    } else if (el.target.id === "pages") {
      setFormData((prev) => {
        const temp = { ...prev, pages: el.target.value };
        return temp;
      });
    } else if (el.target.id === "year") {
      setFormData((prev) => {
        const temp = { ...prev, year: el.target.value };
        return temp;
      });
    } else if (el.target.id === "imageLink") {
      setFormData((prev) => {
        const temp = { ...prev, imageLink: el.target.value };
        return temp;
      });
    } else if (el.target.id === "Link") {
      setFormData((prev) => {
        const temp = { ...prev, Link: el.target.value };
        return temp;
      });
    }
  };
  return (
    <div className="popup_container">
      <button
        className="close_createform"
        onClick={() => props.setUpdate(false)}
      >
        close
      </button>
      <form onSubmit={updatesubmitHandler} className="create_form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Enter book title"
          id="title"
          value={formData.title}
          onChange={formDataHandler}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          placeholder="Enter Author Name"
          id="author"
          value={formData.author}
          onChange={formDataHandler}
        />
        <label htmlFor="lang">Language</label>
        <input
          type="text"
          placeholder="Enter book language"
          id="language"
          value={formData.language}
          onChange={formDataHandler}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          placeholder="Enter book regions"
          id="country"
          value={formData.country}
          onChange={formDataHandler}
        />
        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          placeholder="Enter pages count"
          id="pages"
          value={formData.pages}
          onChange={formDataHandler}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          placeholder="Enter book publish year"
          id="year"
          value={formData.year}
          onChange={formDataHandler}
        />
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          placeholder="Enter book Image"
          id="imageLink"
          value={formData.imageLink}
          onChange={formDataHandler}
        />
        <label htmlFor="Link">Link</label>
        <input
          type="text"
          placeholder="Enter book Link"
          id="Link"
          value={formData.Link}
          onChange={formDataHandler}
        />
        <input type="submit" value="Submit" className="create_submitbtn" />
      </form>
    </div>
  );
};

export default UpdateBook;
