import Image from "next/image";
import styles from "./page.module.css";
import { SignIn } from "./components/SignIn";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1>Bienvenidos a mi tienda de libros online</h1>
      <p>
        Aquí encontrarás una cuidada selección de títulos que abarcan desde los
        clásicos atemporales hasta las últimas novedades. Nuestro objetivo es
        fomentar la lectura y el amor por los libros, ofreciendo un ambiente
        acogedor y un servicio personalizado. Ya seas un lector ávido o estés
        buscando un regalo especial, nuestra variedad de géneros y autores te
        inspirará a descubrir nuevas aventuras literarias. ¡Explora, elige y
        déjate llevar por el mágico mundo de las palabras!
      </p>
      <SignIn />
    </main>
  );
}
