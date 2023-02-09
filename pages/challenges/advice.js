import Layout from "@/components/layout";
import styles from "@/styles/Advice.module.css";
import Image from "next/image";

export default function Advice() {
  return (
    <Layout>
      <div className={styles.card}>
        <h1 className={styles.title}>Advice #117</h1>
        <p className={styles.advice}>
          &ldquo;It is easy to sit up and take notice, what&apos;s difficult is
          getting up and taking action.&rdquo;
        </p>
        <div className={styles.divider} />
        <div className={styles.btnContainer}>
          <div className={styles.diceBtn}>
            <div className={styles.diceIcon} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
