import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h1 className={styles.title}>
        Go to <Link href="/contact">Contact</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
