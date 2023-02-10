import Layout from "@/components/layout";
import styles from "@/styles/Calculator.module.css";

export default function Calculator() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.calculator}>
          <div className={styles.header}>
            <h1>calc</h1>
            <div className={styles.themeSwitcher}>
              <h2>Theme</h2>
              <span>Theme Switch Thing</span>
            </div>
          </div>
          <div className={styles.totalContainer}>399,981</div>
          <div className={styles.keypad}></div>
        </div>
      </div>
    </Layout>
  );
}
