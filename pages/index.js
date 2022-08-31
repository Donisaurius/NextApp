import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "./PageLayout.jsx";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => router.push("/articles/1")}
        >
          Ir a un articulo de forma programatica
        </button>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 90vh;
        }

        button {
          height: 3rem;
          border-radius: 10px;
        }
      `}</style>
    </PageLayout>
  );
}
