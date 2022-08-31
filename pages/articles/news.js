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

/* ESTE METODO SE EJECUTA EN EL SERVIDOR CUANDO ES NECESARIO
  CUANDO SE NAVEGA EN LA MISMA SECCION EL CLIENTE HACE EL FETCHING PERO A UN JSON QUE DARA LOS RESULTADOS UN POCO MAS RAPIDOS. PARA EVITAR QUE SE HACE EL FETCHING NUEVAMENTE TENEMOS EL getStaticProps

  Para n fetching el getServerSideProps se ejecuta n veces. Utilizar cuando se requieren datos en Live
  Para n fetching el getStaticProps se ejecuta 1 vez. Esto genera paginas estaticas. 
*/
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  return {
    props: { posts },
  };
}
