import Layout from "@/components/layout";
import styles from "@/styles/Advice.module.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Advice() {
  const { data, mutate } = useSWR("https://api.adviceslip.com/advice", fetcher);

  const getNewAdvice = () => {
    mutate("https://api.adviceslip.com/advice");
  };

  return (
    <Layout>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Advice #{data && data.slip ? data.slip.id : ""}
        </h1>
        <p className={styles.advice}>
          {data && data.slip ? data.slip.advice : ""}
        </p>
        <div className={styles.divider} />
        <div className={styles.btnContainer} onClick={getNewAdvice}>
          <div className={styles.diceBtn}>
            <div className={styles.diceIcon} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
