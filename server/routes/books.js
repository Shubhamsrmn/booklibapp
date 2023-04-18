const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");
//single book getting
router.get("/api/books/:id", async (req, res) => {
  //   const token = req.headers["x-access-token"];
  try {
    // const decoded = jwt.verify(token, "secret123");
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({ status: "ok", book });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});
router.post("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const book = await Book.findById(id);
    const book = await Book.deleteOne({ _id: id });
    return res.json({ status: "ok", book });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});
router.post("/api/book/create", async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    await Book.create({
      title: data.title,
      author: data.author,
      language: data.language,
      pages: data.pages,
      year: data.year,
      imageLink: data.imageLink,
      Link: data.Link,
    });
    return res.json({ status: "ok", data });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});
router.post("/api/book/update", async (req, res) => {
  try {
    let doc = await Book.findById(req.body.id);
    await Book.updateOne(doc, {
      $set: {
        title: req.body.title,
        author: req.body.author,
        language: req.body.language,
        pages: req.body.pages,
        year: req.body.year,
        imageLink: req.body.imageLink,
        Link: req.body.Link,
      },
    });
    await doc.save();
    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});
module.exports = router;
