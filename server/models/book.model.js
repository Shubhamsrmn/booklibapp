const mongoose = require("mongoose");

const Book = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    language: { type: String, required: true },
    pages: { type: Number, required: true },
    year: { type: Number, required: true },
    imageLink: { type: String, required: true },
    Link: { type: String, required: true },
  },
  { collection: "Books" }
);

const model = mongoose.model("bookData", Book);

module.exports = model;
