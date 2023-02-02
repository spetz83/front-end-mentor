import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/QRCode.module.css";

export default function QRCode() {
  return (
    <Layout>
      <div className={styles.card}>
        <Image
          className={styles.qrcode}
          src="/images/image-qr-code.png"
          width={400}
          height={400}
          alt="qr code"
        />

        <h1 className={styles.heading}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.description}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </Layout>
  );
}
