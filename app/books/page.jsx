import { getBooks } from "../lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Books() {
  const books = await getBooks();
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1>Nuestros libros</h1>
      <div>
        <ul
          style={{
            marginTop: "10px",
            flexDirection: "column",
            display: "flex",
            ustifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {books.map((books, i) => (
            <li
              style={{
                marginTop: "40px",
                flexDirection: "column",
                display: "flex",
                ustifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>{books.title}</h3>
              <h4>{books.author}</h4>
              <Image
                width={500}
                height={500}
                src={books.imageUrl}
                alt={`${books.title}`}
              ></Image>
              <p>{books.imageUrl}</p>
              <p>{books.description}</p>
              <h4>{books.price}</h4>
              <Link href={`/books/${books.id}`}>VER MÁS</Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
