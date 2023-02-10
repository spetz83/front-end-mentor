import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        <Link href="/challenges/qr-code" className={styles.card}>
          <h2 className={inter.className}>
            QR Code Component <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            A perfect first challenge if you&apos;re new to HTML and CSS.
          </p>
        </Link>

        <Link href="/challenges/notifications" className={styles.card}>
          <h2 className={inter.className}>
            Notifications Page <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Responsive Notifications Page</p>
        </Link>

        <Link href="/challenges/advice" className={styles.card}>
          <h2 className={inter.className}>
            Advice App <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            A random advice generator using the Advice Slip API.
          </p>
        </Link>

        <Link href="/challenges/calculator" className={styles.card}>
          <h2 className={inter.className}>
            Calculator App<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Calculator... 3 Themes... Nuff Said.
          </p>
        </Link>
      </div>
    </Layout>
  );
}
