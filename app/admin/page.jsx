import Form from "./Form";
import { auth } from "../../auth";

export default async function Admin() {
  const session = await auth();

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <h1>{`Hola ${session.user?.name}`}</h1>
      <Form session={session.user} />
    </section>
  );
}
