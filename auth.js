import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { getUser, createUser } from "./app/lib/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user }) {
      // confirm user existance
      const existingUser = await getUser(user.email);
      if (!existingUser) {
        // Create User
        await createUser({
          email: user.email,
          name: user.name,
        });
        console.log("user created");
      } else {
        console.log("user existed");
      }
      return true;
    },
    async session({ session, token }) {
      // Store the role in the session
      session.user.role = token.role;
      session.user.id = token.id;

      return session;
    },
    async jwt({ token, user }) {
      //console.log(token, "token")
      if (user) {
        const existingUser = await getUser(user.email);
        // Store the role in the JWT token
        token.role = existingUser.role;
        token.id = existingUser.id;
      }
      return token;
    },
  },
});
