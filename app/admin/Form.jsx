"use client";
import { useState, useEffect, useRef } from "react";
import { createBook, getUserBooks, deleteBook } from "../lib/api";

export default function From() {
  const formRef = useRef(null);
  const [books, setBooks] = useState();
  const [newBook, setNewBook] = useState({
    title: "",
    imageUrl: "",
    author: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    getBooks();
  }, []);

  const handleChange = (e) => {
    //console.log();
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
    //console.log(newBook);
  };

  async function handleSubmit() {
    await createBook(newBook);
    console.log(`libro ${newBook.title} a sido creado`);
    setNewBook({
      title: "",
      imageUrl: "",
      author: "",
      description: "",
      price: "",
    });
    getBooks();
    formRef.current.reset();
  }

  async function getBooks() {
    const data = await getUserBooks();
    setBooks(data);
  }

  async function handleDelete(id) {
    await deleteBook(id);
    getBooks();
  }

  return (
    <section>
      <h2>Tus libros</h2>
      <ul
        style={{
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {books?.map((book) => (
          <li
            key={`lista-${book.title}`}
            style={{ display: "flex", gap: "20px" }}
          >
            <p>{book.title}</p>
            {<button onClick={() => handleDelete(book.id)}>BORRAR</button>}
          </li>
        ))}
      </ul>
      <h2>Create un libro</h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        ref={formRef}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="imageUrl"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
          required
        />
      </form>
      <button onClick={() => handleSubmit()}>SUBMIT</button>
    </section>
  );
}
