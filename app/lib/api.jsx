"use server";
import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUserBooks() {
  //console.log(cookies().get("authjs.session-token"));
  const response = await fetch(`${baseUrl}/users/books`, {
    cache: "no-store",
    headers: {
      Cookie: `__Secure-authjs.session-token=${
        cookies().get("__Secure-authjs.session-token").value
      }`,
    },
    credentials: "include",
  });
  return await response.json();
}

export async function getUser(id) {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!response) {
      throw new Error("Fail to post book");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function createUser(user) {
  try {
    const response = await fetch(`${baseUrl}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to Create user");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getBook(id) {
  try {
    const response = await fetch(`${baseUrl}/books/${id}`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!response) {
      throw new Error("Fail to post book");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getBooks() {
  try {
    const response = await fetch(`${baseUrl}/books`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!response) {
      throw new Error("Fail to post book");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function createBook(newBook) {
  console.log(newBook);
  try {
    const response = await fetch(`${baseUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `__Secure-authjs.session-token=${
          cookies().get("__Secure-authjs.session-token").value
        }`,
      },
      body: JSON.stringify(newBook),
    });
    if (!response) {
      throw new Error("Fail to post book");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteBook(id) {
  try {
    const response = await fetch(`${baseUrl}/books/${id}`, {
      method: "DELETE",
      headers: {
        Cookie: `__Secure-authjs.session-token=${
          cookies().get("__Secure-authjs.session-token").value
        }`,
      },
    });
    console.log(`book id${id} deleted`);
    if (!response.ok) {
      throw new Error("Failed to Delete book");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
