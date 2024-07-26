import { getBook } from "../../lib/api";
import Image from "next/image";

export default async function Books({ params }) {
  const id = params.id;
  const book = await getBook(id);
  return (
    <article>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <Image
          width={500}
          height={500}
          src={book.imageUrl}
          alt={`${book.title}`}
        ></Image>
        <p>{book.imageUrl}</p>
        <p>{book.description}</p>
        <h4>{book.price}</h4>
      </div>
    </article>
  );
}
