import { SignIn } from "../components/SignIn";

export default function Login() {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Hola</h2>
      <p>Por favor haga log in para seguir con el sitio</p>
      <SignIn />
    </section>
  );
}
