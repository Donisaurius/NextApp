import { useEffect, useState } from "react";
import PageLayout from "../PageLayout";

export default function news({ posts }) {
  /*   useEffect(() => {
    console.log("Componente cargado");

    async function fetching() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const posts = await response.json();

      console.log(posts);
    }

    fetching();
  }, []); */

  return (
    <PageLayout title="Posts">
      <div>
        {posts.length === 0 && <p>No hay articulos</p>}
        {posts.length > 0 &&
          posts.map((value, index) => (
            <div key={value.id}>
              <h2>{value.title}</h2>
              <p>{value.body}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  return {
    props: { posts },
  };
}
