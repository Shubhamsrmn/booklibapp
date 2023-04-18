const fetchBooks = async () => {
  const res = await fetch("http://localhost:5000/api/books", {
    method: "GET",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
  const data = await res.json();
  return data;
};

export default fetchBooks;
