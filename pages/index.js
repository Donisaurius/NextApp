import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "./PageLayout.jsx";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
        <button onClick={() => router.push("/articles/1")}>
          Ir a un articulo de forma programatica
        </button>
      </div>
    </PageLayout>
  );
}
